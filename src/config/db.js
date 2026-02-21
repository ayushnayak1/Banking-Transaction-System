const mongoose = require("mongoose")

function connectToDB(){
    mongoose.connect(process.env.MONGO_URL)
    .then(() =>{
        console.log("Database Connected");
    })
    .catch(error=>{
        console.log("error in connecting to DB")
        process.exit(1);
    })
}


module.exports =connectToDB;