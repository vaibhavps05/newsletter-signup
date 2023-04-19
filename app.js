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
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: secondName,
                }
            }
        ]
    };

    var jsonData = JSON.stringify(data);


    var options = {
        url: "https://us21.api.mailchimp.com/3.0/lists/7e0dca60d6",
        method:"post",
        headers: {
            "Authorization": "vaibhav 2335faed0949ce76bb9dcba9845e3a1a-us21"

        },
        body: jsonData

    };


    request(options , function(error, response, body){
        if(error){
            res.sendFile(__dirname + ("/failure.html"));
        }if (response.statusCode != 200) {
            res.sendFile(__dirname + ("/failure.html"));
        } else {
            res.sendFile(__dirname + ("/success.html"));
        }
    });

});

app.post("/failure", function(req, res){
    res.redirect("/");
});

app.listen(process.env.PORT || 3000, function(){
    console.log("server is on port 3000");
});






// API key
// 2335faed0949ce76bb9dcba9845e3a1a-us21


// list ID 
// 7e0dca60d6