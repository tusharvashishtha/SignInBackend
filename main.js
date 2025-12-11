const mongoose = require("mongoose");

const dbConnect = async() => {
    try{
       await mongoose.connect("mongodb://localhost/userDetails")
    }catch(err){
        console.log(err)
    }
}

module.exports = dbConnect;