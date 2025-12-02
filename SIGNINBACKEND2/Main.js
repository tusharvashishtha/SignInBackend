const mongoose = require('mongoose');

const dbConnect = async () => {
    try{
       await mongoose.connect('mongodb://localhost/test3')
    }catch(err){
        console.log(err)
    }
}

module.exports = dbConnect