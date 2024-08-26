const express = require('express');
const app = express();
require('./database/connection');
const cors = require('cors')
app.use(cors())
require('dotenv').config();
const PORT = process.env.PORT || 3000;

var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.get("/", (req, res) => {
    res.send("welcome to CRUD app")
})


app.listen(PORT, () => {
    console.log("Your server is running on port# 3000")
})


//student code{
const studRoute = require('./Router/student')
app.use('/student', studRoute) 
