//import module mongoose
const mongoose = require("mongoose");
// create shema
const teacherSChema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    pasword: String,
    cv: String,
    tel: String,
    adresse: String,
    confirmPwd: String,
    speacialty: String,
    role: String,
    status: String,

});
//create modéle name
const teacher = mongoose.model("Teacher", teacherSChema);
//pour la rendre exportable
module.exports = teacher;