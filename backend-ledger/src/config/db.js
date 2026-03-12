<<<<<<< HEAD
const mongoose = require("mongoose")



function connectToDB() {

    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("server is connected to DB")
        })
        .catch(err => {
            console.log("Error connecting to DB")
            process.exit(1)
        })

}


module.exports = connectToDB
=======
const mongoose = require('mongoose');

function connectToDB() {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("server is connected to db");
        
    })
    .catch((err) => {
        console.error("error connecting to db",err);
        process.exit(1);
        
    })

}
module.exports = connectToDB;
>>>>>>> 141e9be54f6220e14431bd7378ce7cb90bf863d1
