const express = require('express');
const app = express();
const router = require('./Routes/root')

require("./Main")();

app.use(express.json())
app.use('/', router)

app.listen(3000, () => {
    console.log("Listening to port 3000")
})