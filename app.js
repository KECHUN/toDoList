const express = require("express");
const https = require("https");
const date = require(__dirname + "/date.js");
const app = express();
const bodyParser = require("body-parser");
app.use(express.static("public"));
let items = ["Shopping","Running","Cycling","Swimming"];
let workItems = [];
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.post("/",function(req,res){
    let item = req.body.newItem;
    console.log(req.body.list);
    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
    
});
app.get("/",function(req,res){
    dayName = date.getDay();
    res.render("list",{listTitle:dayName,newListItems:items});
    
});
app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work List",newListItems:workItems});

});
app.get("/about",function(req,res){
    res.render("about");

});


app.listen(3000,function(){
    console.log("Server is running on port 3000.")
});