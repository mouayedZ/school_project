//import module mongoose
const mongoose = require("mongoose");
const { stringify } = require("querystring");
// create shema
const usershema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    pasword: String,
    avatar: String,
    tel: String,
    dateOfBirthday: String,
    confirmPwd: String,
    role: String,
    cv : String,
    adresse : String,
    speacialty : String,
    telChild : String,
    status : String,
    teacherName : String,
    confirmed:Boolean,
    courseName : String,
    code:String,
    
    


});
//create modéle name
const user = mongoose.model("User", usershema);
//pour la rendre exportable
module.exports = user;