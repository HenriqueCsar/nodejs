const express = require("express");
const app = express();


app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.redirect('/pt-br/')
});

app.get("/question/", (req,res)=>{
    res.render('question')
});

app.get("/pt-br/", (req,res)=>{
    res.render('index')
});

app.listen(5000, ()=>{
    console.log("server running...")
});