const express = require('express');
const router = express.Router();

const {signUpUser, loginUser, getUserDetails} = require("../Controller/UserController")

router.post('/signup', signUpUser);
router.post('/login', loginUser);
router.post('/user', getUserDetails)

module.exports = router
