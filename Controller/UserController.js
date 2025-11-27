const User = require('../Model/User');

async function signUpUser(req, res) {
    const {name, email, password} = req.body;
    try{
        await User.create({
            name , email , password
        })
        res.status(201).json({status : 'Success' , message : "User created successfully"})
    } catch(err){
        console.log(err)
        res.status(400).json({status : 'Failed', message : "Error please try again later"})
    }
}

async function loginUser(req, res) {
    
}

module.exports = {signUpUser,loginUser}