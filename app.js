import express from "express";
import ejs from "ejs";


const app=express();
const port=3000;

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.get("/",(req,res)=>{
res.render("index.ejs");
});

app.post("/generate",(req,res)=>{
    var url= req.body.url;
    console.log(url);
});

app.listen(port,()=>{
console.log(`Server is running on port ${port}.`);
});