//import express mongoose
const mongoose = require("mongoose");
//mongodb ://127.0.0.1:27017 => adresse de base du serveur mongondb(port 27017)
mongoose.connect("mongodb://127.0.0.1:27017/validationDB");
//importation modelq
const nodemailer = require('nodemailer');
const User = require("./models/user");
const Course = require("./models/course");
const Teacher = require("./models/teacher");

const Affectation = require("./models/affectation");
const Evaluation = require("./models/evaluation");
//import module multer
const multer = require("multer");
const codeMessage = require("./tamplate/code");
//import module path
const path = require("path");
//import express module


const express = require("express");
// axiossss
const axios = require("axios");
//import body-parser module

const bodyParser = require("body-parser");
// creation application expr ess
const app = express();
//importation mochle cryptage
const bcrypt = require("bcrypt");
const affectation = require("./models/affectation");
const { log } = require("console");
// app configuration 
//send bojet from
app.use(bodyParser.json());
//get objet from
app.use(bodyParser.urlencoded({ extended: true }));
//securité configuration
app.use((req, res, next) => {

    res.setHeader("Access-Control-Allow-Origin", "*");

    res.setHeader(

        "Access-Control-Allow-Headers",

        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"

    );

    res.setHeader(

        "Access-Control-Allow-Methods",

        "GET, POST, DELETE, OPTIONS, PATCH, PUT"

    );

    next();

});
// ShortCut
app.use("/myFiles", express.static(path.join("backend/images")));
// Media Types
const MIME_TYPE = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg",
};
// ShortCut
app.use("/myCv", express.static(path.join("backend/cv")));
// Media Types
const cv = {
    "application/pdf": "pdf",

};



const storageConfig = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, "backend/images");
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(" ").join("-");
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + "-" + Date.now() + "-crococoder-" + "." + extension;
        cb(null, imgName);
    },
});
// signup student :
app.post("/users/signup", multer({ storage: storageConfig }).single("img"), (req, res) => {
    let x = req.body;
    console.log("here into BE", x);
    let tel = x.tel
    User.findOne({ tel: x.tel }).then(
        (doc) => {
            telFind = doc;
            if (!telFind) {

                bcrypt.hash(x.pwd, 10).then(
                    (pwdcrypt) => {
                        x.pasword = pwdcrypt;
                        x.avatar = "http://localhost:3000/myFiles/" + req.file.filename;
                        console.log("yesss", x.pasword);
                        let user = new User(x);
                        user.save((error, doc) => {
                            if (error) {
                                res.json({ msg: "error " });
                            }
                            else {
                                res.json({ msg: "add with  succes" });
                            }
                        }


                        );
                        console.log('here response from app', user)
                    });
            }
            else {
                res.json({ msg: "number is already exist" });
            }
        });

});

const cvConfig = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = cv[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, "backend/cv");
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(" ").join("-");
        const extension = cv[file.mimetype];
        const nameCv = name + "-" + Date.now() + "-crococoder-" + "." + extension;
        cb(null, nameCv);
    },
});

// sugnup teacher:
app.post("/users/signupTeacher", multer({ storage: cvConfig }).single("cv"), (req, res) => {
    let x = req.body;
    console.log("here into BE", x)
    let y = x.email
    User.findOne({ email: y }).then(
        (doc) => {
            emailFind = doc;
            if (!emailFind) {
                bcrypt.hash(x.pwd, 10).then(
                    (pwdcrypt) => {
                        x.pasword = pwdcrypt;
                        console.log("yesss", req.file);
                        x.cv = "http://localhost:3000/myCv/" + req.file.filename;


                        console.log("yesss", x.pasword);


                        let user = new User(x);
                        user.save((error, doc) => {
                            if (error) {
                                res.json({ msg: "error " });
                            }
                            else {
                                res.json({ msg: "add widh  succes" });
                            }
                        }


                        );
                        console.log('here response from app', user)
                    });
            }

            else {
                res.json({ msg: "the email is already exist" });
            }

        });
});
// signup Parent :


app.post("/users/signupParent", (req, res) => {
    let x = req.body;
    console.log('jdkfffffddfffffffffffffff    ', x.telChild);
    let childFind;
    User.findOne({ tel: x.telChild }).then(
        (doc) => {
            childFind = doc;
            if (childFind) {

                bcrypt.hash(x.pwd, 10).then(
                    (pwdcrypt) => {
                        x.pasword = pwdcrypt;
                        console.log("yesss", x.pasword);


                        let user = new User(x);
                        user.save((error, doc) => {
                            if (error) {
                                res.json({ msg: "error " });
                            }
                            else {
                                res.json({ msg: "add with  succes" });
                            }
                        }


                        );
                        console.log('here response from app', user)
                    });
            } else {
                res.json({ msg: "num of child is invalide" });
            }

        });

});
app.post("/users/login", (req, res) => {

    console.log("here tezm body", req.body);
    let x = req.body;
    let user;
    User.findOne({ email: x.email }).then(
        (doc) => {
            user = doc;
            if (!doc) {
                res.json({ msg: "please check your email" });

            }
            else {
                return bcrypt.compare(x.pwd, doc.pasword);
            }
        }).then(
            (checkpwd) => {
                console.log("her echeckpwd", checkpwd);
                if (!checkpwd) {

                    res.json({ msg: "please check your passwordd" });
                }
                else {
                    let userToSend =
                    {
                        id: user._id,
                        fname: user.firstName,
                        lname: user.lastName,
                        role: user.role,
                        status: user.status,
                        telChild: user.telChild,
                    };
                    res.json({ msg: "welcome", connecteduser: userToSend });

                }

            }
        )

});
// add course
app.post("/courses", (req, res) => {

    let x = new Course(req.body);
    x.save();
    res.json({ msg: "add with succes" });


});
// get course by id
app.get("/courses/get/:id", (req, res) => {
    let id = req.params.id;

    console.log('here hh', id)
    Course.find({ _id: id }).then(
        (docs) => {
            res.json({ course: docs })

        });
});
// get all courses
app.get("/courses", (req, res) => {

    // res.json({ matche: matchetab });
    Course.find().then(
        (docs) => {
            res.json({ courses: docs });

        });
});

// get courses by teachers :
app.get("/courses/:id", (req, res) => {
    let id = req.params.id;
    console.log(id)
    Course.find({ teacherId: id }).then(
        (docs) => {
            console.log(docs)
            res.json({ courses: docs });

        });
});

// delete course :
app.delete("/courses/:id", (req, res) => {
    let id = req.params.id;
    Course.deleteOne({ _id: id }).then(
        (respense) => {
            if (respense.deletedCount == 1) {
                res.json({ msg: "delet success" });
            }
            else {
                res.json({ msg: "delet  noooo  success" });
            }
        });

});

// edit course :
app.put("/courses", (req, res) => {
    let x = req.body;

    let y = req.body._id;
    console.log('rrrr', y)

    Course.updateOne({ _id: x._id }, x).then(
        (response) => {
            if (response.nModified == 1) {
                res.json({ messages: "MODIF success" });
                console.log('here is a response from backend', response)
            }
            else {
                res.json({ messages: "modif noooo  success" });
            }

        })
}
);
// get all students :
app.get("/users", (req, res) => {

    // res.json({ matche: matchetab });
    User.find({ role: "student" }).then(
        (docs) => {
            res.json({ users: docs });

        });
});
// get student by Id:
app.get("/students/:id", (req, res) => {
    let id = req.params.id;
    User.findOne({ _id: id }).then(
        (doc) => {
            res.json({ student: doc })

        });


    //res.json(matchetab.find((obj) => { return obj.id == id }));
    console.log("here into bl");
});
// GET ALL STUDENTS :
app.get("/students", (req, res) => {

    // res.json({ matche: matchetab });
    User.find({ role: "student" }).then(
        (docs) => {
            res.json({ students: docs });

        });
});
// get student by course :
app.get("/affectation/:id", (req, res) => {
    let id = req.params.id;
    console.log('here hh', id)
    Affectation.find({ courseId: id }).then(
        (docs) => {
            res.json({ affectation: docs })

        });


    //res.json(matchetab.find((obj) => { return obj.id == id }));
    console.log("here into bl", affectation);
});
// delete course :
app.delete("/students/:id", (req, res) => {
    let id = req.params.id;
    User.deleteOne({ _id: id }).then(
        (respense) => {
            if (respense.deletedCount == 1) {
                res.json({ msg: "delet success" });
            }
            else {
                res.json({ msg: "delet  no  success" });
            }
        });

});
// get all teachers
app.get("/users/teachers", (req, res) => {

    // res.json({ matche: matchetab });
    User.find({ role: "teacher" }).then(
        (docs) => {
            res.json({ users: docs });

        });
});
// affectaion :
app.post("/affectation", (req, res) => {
    console.log('here value', req.body)
    let y = req.body.courseId;
    let z = req.body.studentId;
    Affectation.findOne({ $and: [{ courseId: y }, { studentId: z }] }).then(
        (doc) => {
            affectationFind = doc;
            console.log("fdfdfd", affectationFind)
            if (!affectationFind) {

                let x = new Affectation(req.body);
                x.save();
                res.json({ msg: "add with succes" });
            }
            else {
                res.json({ msg: "affectation is already exist" });
            }
        });


});
// get Affectation by Student :
app.get("/affectation/students/:id", (req, res) => {

    let x = req.params.id;
    Affectation.find({ studentId: x }).then(
        (docs) => {
            res.json({ affectation: docs });

        });
});
// add note :
app.post("/evaluation", (req, res) => {
    console.log('here value', req.body)
    console.log('here number of tel', req.body.tel)
    let y = req.body.idStudent;
    let z = req.body.idCourse;
    Evaluation.findOne({ $and: [{ idStudent: y }, { idCourse: z }] }).then(
        (doc) => {
            noteFind = doc;
            console.log("fdfdfd", noteFind)
            if (!noteFind) {
                let x = new Evaluation(req.body);
                x.save();
                res.json({ msg: "add with succes" });
            }
            else {
                res.json({ msg: "note is already exist" });
            }
        });
});
// get teacher by speciality :

app.get("/teachers/specality/:id", (req, res) => {
    let x = req.params.id;
    console.log('here hh', x)
    User.find({ speacialty: x }).then(
        (docs) => {
            res.json({ teachers: docs })

        });




});
// delete teachers :

app.delete("/teachers/:id", (req, res) => {
    let id = req.params.id;
    User.deleteOne({ _id: id }).then(
        (respense) => {
            if (respense.deletedCount == 1) {
                res.json({ msg: "delet success" });
            }
            else {
                res.json({ msg: "delet  no  success" });
            }
        });

});
// get note by students :
app.get("/evaluation/students/:id", (req, res) => {
    let x = req.params.id;
    console.log('here hh', x)
    Evaluation.find({ idStudent: x }).then(
        (docs) => {
            res.json({ notes: docs })

        });
});
// get note by tel :
app.get("/evaluation/note/:id", (req, res) => {
    let x = req.params.id;
    console.log('here hh', x)
    Evaluation.find({ tel: x }).then(
        (docs) => {
            res.json({ notes: docs })

        });
});

// getCourseByIdStudent :
// app.get("/courses/students/:id", (req, res) => {
//     let id = req.params.id;
//     console.log(id)
//     Course.find({ teacherId: id }).then(
//         (docs) => {
//             console.log(docs)
//             res.json({ courses: docs });

//         });
// });
// edit teacher :
app.put("/teachers/edit/:id", (req, res) => {
    let x = req.params.id
    console.log('here id ', x)
    User.updateOne({ _id: x }, { status: "ok" }).then(
        (response) => {
            if (response.nModified == 1) {
                res.json({ messages: "MODIF success" });
                console.log('here is a response from backend', response)
            }
            else {
                res.json({ messages: "modif noooo  success" });
            }

        })
}
);
// decoonecter teacher :
app.put("/teachers/deconnecter/:id", (req, res) => {
    let x = req.params.id
    console.log('here id ', x)
    User.updateOne({ _id: x }, { status: "No Ok" }).then(
        (response) => {
            if (response.nModified == 1) {
                res.json({ messages: "MODIF success" });
                console.log('here is a response from backend', response)
            }
            else {
                res.json({ messages: "modif noooo  success" });
            }

        })
}
);
// affect course :
app.put("/courses/affect", (req, res) => {

    let x = req.body.teacherName;
    let y = req.body.courseId;
    console.log('here req', req.body);
    console.log('rrrr', y);

    console.log('aaa', x);


    Course.updateOne({ _id: y }, { teacherName: x }).then(
        (response) => {
            if (response.nModified == 1) {
                res.json({ messages: "affect with success" });
                console.log('here is a response from backend', response)
            }
            else {
                res.json({ messages: "modif noooo  success" });
            }

        })
}
);

// for test !
app.post('/test', async (req, res) => {
    const user = req.body;
    console.log('here return', user);
    const salt = await bcrypt.genSalt(6);
    const hashed = await bcrypt.hash(user.pwd, salt);
    const email = user.email;

    console.log("eleelele", email)
    try {
        const emailFind = await User.findOne({ email });
        if (!emailFind) {
            console.log("nooooooooooooooooooooooooo")
            const min = 100000;
            const max = 999999;
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            const codee = randomNumber.toString();
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,
                auth: {
                    user: 'mailing032@gmail.com',
                    pass: 'faukkcethmmrssif',
                },
            });
            console.log(user.email)
            const params = {
                firstName: user.firstName,
                code: codee,
            };
            console.log('params', params)

            console.log("email", email)
            await transporter.sendMail({
                from: '"dev team 👻" <no-reply@dev-team.com', // sender address
                to: user.email,
                subject: 'Hello ✔', // Subject line
                html: `
          <html>
          <head>
          <style>
          p {
            font-family: Verdana, Geneva, sans-serif;
            font-size: 15px;
            color: #585c6e;
            text-align: center;
          }
          div {
            text-align: center;
          }
          h3,h5{
            font-family: Verdana, Geneva, sans-serif;
            font-size: 25px;
            color: #585c6e;
            text-align: center;
            padding-top: 20px;
          }
          h5{
            font-size: 20px;                  
          }
          span{
            color : #e8313d ;
          }
          a{
            text-decoration: none;
          }
          h2{
           font-family: Poppins, sans-serif;;
            font-size: 35px;
            padding-top: 75px;
            color: #ffffff;
          }
          .header{
          background-color: #1E293B;
          align-items: center;
          justify-content: center;
          }
          .title{
          padding-bottom: 70px;
          }
          </style>
          </head>
          <body>
          <div class="header">
          <h2 class="title">Verification code</h2>
          </div>
          <h3>Hi ${user.firstName}!</h3>
          <p>Your verification code is <span>${codee}</span>.</p>
          <p>Enter this code to change your password,If you didn't request this,simply delete it.</p>
          <p>If you have any questions,Send us an email at <br> "contact@dev-team.com"</p>
          <h5>The geo-nova team.</h5>
          </body>
          </html>
            `,

            });
            console.log('efff', email)
            const users = new User({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                pasword: hashed,
                role: user.role,
                code: codee,
                confirmed: false,
            });
            await users.save();

            res.status(200).send({});
        } else {
            return res.status(400).send({ message: 'email already exist ' });
        }
    } catch (error) {
        console.error(error)
        res.json({ message: "modif noooo  success" });
    }
});
// get users by email :
app.get("/test/usersByEmail/:email", (req, res) => {

    let x = req.params.email;
    User.find({ email: x }).then(
        (docs) => {
            if (!docs) {
                return res.json({ message: "user not found" });
            }
            return res.json({ users: docs });


        });
});
app.post('/test/confirmation-sign-up', async (req, res) => {
    const { code, email } = req.body;
    console.log('code', { code, email })
    try {
        const userFind = await User.findOne({ email });
        console.log('user', userFind)
        if (!userFind) {
            return res.json({ message: "user not found" });
        } else if (userFind.confirmed === true) {
            return res.json({ message: "user is already confirmed" });
        } else if (userFind.confirmed === false) {
            if (code === userFind.code) {
                userFind.confirmed = true;
                await userFind.save();
                return res.json({ user: userFind });
            }
            console.log('HELLO', user)
            return res.json({ message: "code incorrect" });
        }
    } catch (error) {
        return res.json({ message: "code incorrect" });
    }
});



//rendre epplication exportable 
module.exports = app;