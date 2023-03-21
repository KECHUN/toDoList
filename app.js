const express = require("express");
const https = require("https");
const app = express();
const bodyParser = require("body-parser");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');


app.get("/",function(req,res){
    var today = new Date();
    var day = today.getDay();
    var dayName = "";
    switch(day){
        case 0:
        dayName = "Sunday";
        break;
        case 1:
        dayName = "Monday";
        break;
        case 2:
        dayName = "Tuesday";
        break;
        case 3:
        dayName = "Wednesday";
        break;
        case 4:
        dayName = "Thursday";
        break;
        case 5:
        dayName = "Friday";
        break;
        case 6:
        dayName = "Saturday";
        break;
        default:
        console.log("Not the day");
       

    }
    res.render("list",{kindOfDay:dayName});
    
});



app.listen(3000,function(){
    console.log("Server is running on port 3000.")
});