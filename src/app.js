const express = require("express");
const { register } = require("module");
const serverless = require('serverless-http');

const app = express();
const path = require("path");
const hbs = require("hbs");
const PORT = process.env.PORT || 8000;


//public static path
const staticPath = path.join(__dirname , "../public");
const templatepath = path.join(__dirname , "../templates/views");
const partialPath = path.join(__dirname , "../templates/partials");

app.set('view engine' , 'hbs');
app.set("views",templatepath);
hbs.registerPartials(partialPath);
app.use(express.static(staticPath));

//routing
app.get("" , (req,res)=>{
    res.render("index");
});

app.get("/about" , (req,res)=>{
    res.render("about");
});


app.get("/weather" , (req,res)=>{
    res.render("weather");
});


app.get("*" , (req,res)=>{
    res.render("404error",{
        errormsg:"OPPS! Page Not Found"
    });
});



app.listen(PORT , ()=>{
    console.log(`Listen on port no. ${PORT}`);
});