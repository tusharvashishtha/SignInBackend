const User = require('../Model/User')
const bcrypt = require('bcrypt');
const saltrounds = 10;

async function signup(req, res) {
    const {name , email} = req.body;
    const password = await bcrypt.hash(req.body.password, saltrounds)
    try{
        await User.create({
            name , email , password
        })
        res.status(201).json({status : "Success", message : "user created successfully"})
    }catch(err){
        console.log(err);
        res.status(400).json({Status: 'Error', message : "Something went wrong"})
    }
}

async function login(req, res){
    const {email, password} = req.body;
    const findUser = await User.findOne({email})
    try{
        const check = await bcrypt.compare(password, findUser.password);
        if(check){
           return res.json({status : "Sucess", message : "Login successfull"});
        } else{
           return res.json({status : "Error", message : "Login failed"});
        }
    }catch(err){
        console.log(err);
        res.json({status : "Error", message : "Something went wrong"})
    }
}




module.exports = {signup, login}