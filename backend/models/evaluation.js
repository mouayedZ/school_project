//import module mongoose
const mongoose = require("mongoose");
// create shema
const evaluationshema = mongoose.Schema({
    idCourse : String,
    idStudent: String,
    firstName : String,
    lastName: String,
    note:String,
    evaluation : String,
    tel : String,
    
    


});
//create modéle name
const evaluation = mongoose.model("Evaluation", evaluationshema);
//pour la rendre exportable
module.exports = evaluation;