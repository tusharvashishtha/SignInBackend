const User = require('../Model/User');
const bcrypt = require('bcrypt');
const { search } = require('../Routes/Root');
const saltRounds = 10;

async function signUpUser(req, res) {
    const {name, email, lastname} = req.body;
    const password = await bcrypt.hash(req.body.password, saltRounds)
    try{
        await User.create({
            name , email , password , lastname
        })
        res.status(201).json({status : 'Success' , message : "User created successfully"})
    } catch(err){
        console.log(err)
        res.status(400).json({status : 'Failed', message : "Error please try again later"})
    }
}

async function getUserDetails(req, res){
    const {email} = req.body;
    const searchUser = await User.findOne({email})
    console.log(searchUser.fullname);
    console.log(searchUser.greet())
    res.json({searchUser})
}

async function loginUser(req, res) {
    const {email, password} = req.body;
    const searchUser =  await User.findOne({email})
    try{
        const check = await bcrypt.compare(password, searchUser.password)
        if(check){
            return res.json({status : "success" ,message : "Login Succesfull"})
        }
        else{
            return res.json({status : "Failed", message : "Wrong email and password"})
        }

    }catch(err){
        console.log(err)
        return res.json({stauts : "Failed", message : "Could not login try again later"})
    }
}

module.exports = {signUpUser,loginUser, getUserDetails}