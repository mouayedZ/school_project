//import module mongoose
const mongoose = require("mongoose");
// create shema
const courseshema = mongoose.Schema({
    courseName : String,
    durationCourse : String,
    childAge : String,
    courseCpacity : String,
    courseDescription : String,
    teacherName : String,
    idStudent : String,
    teacherId:String,
    


});
//create modéle name
const course = mongoose.model("Course", courseshema);
//pour la rendre exportable
module.exports = course;