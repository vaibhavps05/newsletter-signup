const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});


app.post("/", function(req, res){
    
    var firstName = req.body.fName;
    var secondName = req.body.sName;
    var email = req.body.email;

    console.log(firstName, secondName, email);

})


app.listen(3000, function(){
    console.log("server is on port 3000");
});