//import app from bakend/app
const app = require("./backend/app");
//server in action a port 3000
app.listen(3000, () => {
    console.log("express server is listining on port 3000")

}
);