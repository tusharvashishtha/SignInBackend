const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    }
})


userSchema.virtual("fullname").get(function () {
    return `${this.name} ${this.lastname}`;
});

userSchema.methods.greet = function(){
    console.log(`Hey I am ${this.fullname}`)
}

module.exports = mongoose.model('Users', userSchema)