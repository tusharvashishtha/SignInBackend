const express = require('express');
const app = express();
const router = require('./Routes/Root')
app.use(express.json());
app.use('/', router)
require('./main')();

app.listen(3000, () => {
    console.log("Listening to port 3000")
})




