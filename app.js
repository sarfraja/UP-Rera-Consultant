const express = require ("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");


const app=express();
app.use( express.static( "public" ) );


app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended:true
}));

app.get("/", function(req,res){
    res.render("index");
});
app.get("/address", function(req,res){
    res.render("address");
});

app.get("/contact", function(req,res){
    res.render("contact");
});

app.get("/catalogue", function(req,res){
    res.render("catalogue");
});






app.listen(3000,function(){
    console.log("server is port on 3000");
})