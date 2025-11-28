const User = require('../Model/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;

async function signUpUser(req, res) {
    const {name, email, password} = req.body;
    const pass = await bcrypt.hash(req.body.password, saltRounds);
    console.log(pass);
    res.json({pass})
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