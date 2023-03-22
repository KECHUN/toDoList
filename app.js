const express = require("express");
const https = require("https");
const app = express();
const bodyParser = require("body-parser");
app.use(express.static("public"));
let items = ["Shopping","Running","Cycling","Swimming"];
let workItems = [];
app.use(express.static("public"));
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
    let today = new Date();
    dayName = "";
    let options = {
        dataStyle: "full",
        day: "2-digit",
        month: "long",
        weekday: "long"
    };
    dayName = today.toLocaleString("en-US", options);
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