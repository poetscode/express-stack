const express = require('express')
const app = express()
const path = require("path")

const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT

var mockDatabase = []

app.use(express.static(path.join(__dirname,"..", 'frontend')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/doginventory', function (req, res) {
    res.json({data:mockDatabase})
})

app.post("/adddog", function (req, res) {
    var input1 = req.body
    var resposeToUser = req.body
    resposeToUser.adopted = false
 
    mockDatabase.push(resposeToUser)
    res.status(200).json(resposeToUser)
})

app.put("/adddog", function (req, res) {
    console.log("hit the PUT route")
    res.status(200).send("good job buddy")
})

app.delete("/adddog", function (req, res) {
    console.log("hit the DELETE route")
    res.status(200).send("good job buddy")
})

console.log(process.env.GOOGLE_API_KEY)
app.listen(PORT, ()=>{
    console.log("listeing on pport" + PORT )
})