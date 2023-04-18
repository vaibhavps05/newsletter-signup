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

    var data = {
        members: [
            {
                email_address: email,
                status: "subscribed"
            }
        ]
    };

    var jsonData = JSON.stringify(data);


    var options = {
        url: "http://us21.api.mailchimp.com/3.0/lists/7e0dca60d6",
        method:"post",
        headers: {
            "Authorization": "vaibhav 2335faed0949ce76bb9dcba9845e3a1a-us21"

        },
        body: jsonData

    };


    request(options , function(error, response, body){
        if(error){
            console.log(error);
        }else{
            console.log(response.statusCode);
        }
    });

})


app.listen(3000, function(){
    console.log("server is on port 3000");
});






// API key
// 2335faed0949ce76bb9dcba9845e3a1a-us21


// list ID 
// 7e0dca60d6