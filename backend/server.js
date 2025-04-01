const express = require('express')
const app = express()
const path = require("path")

const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT
var dogID = 1

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
    console.log(req.body)
    var resposeToUser = req.body
    resposeToUser.adopted = false
    resposeToUser.id = parseInt(dogID)
    dogID = dogID + 1   
    console.log(resposeToUser)
    mockDatabase.push(resposeToUser)
    res.status(200).json(resposeToUser)
})

app.put("/adddog", function (req, res) {
    console.log("hit the PUT route")
    res.status(200).send("good job buddy")
})

app.delete("/removedog/:banana", function (req, res) {
   console.log(req.params.banana)
   var dogId = parseInt(req.params.banana)
    console.log(dogId)
    for (let i = 0; i < mockDatabase.length; i++) {
        if(mockDatabase[i].id == dogId ){
            delete mockDatabase[i];
        }
      }
 
    res.status(200).send("good job buddy")
})

console.log(process.env.GOOGLE_API_KEY)
app.listen(PORT, ()=>{
    console.log("listeing on pport" + PORT )
})