//import module mongoose
const mongoose = require("mongoose");
// create shema
const affectationshema = mongoose.Schema({
    studentId : String,
    courseId : String,
    teacherName : String,
    teacherId: String,
    studentFirstName:String,
    
    


});
//create modéle name
const affectation = mongoose.model("Affectation", affectationshema);
//pour la rendre exportable
module.exports = affectation;