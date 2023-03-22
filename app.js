const express = require("express");
const https = require("https");
const app = express();
const bodyParser = require("body-parser");
app.use(express.static("public"));
var items = [];
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.post("/",function(req,res){
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});
app.get("/",function(req,res){
    var today = new Date();
    dayName = "";
    var options = {
        dataStyle: "full",
        day: "2-digit",
        month: "long",
        weekday: "long"
    };
    dayName = today.toLocaleString("en-US", options);
    console.log(dayName);
    res.render("list",{kindOfDay:dayName,newListItems:items});
    
});



app.listen(3000,function(){
    console.log("Server is running on port 3000.")
});