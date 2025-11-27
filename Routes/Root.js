const express = require('express');
const router = express.Router();

const {signUpUser, loginUser} = require("../Controller/UserController")

router.post('/signup', signUpUser);
router.post('/login', loginUser);

module.exports = router
