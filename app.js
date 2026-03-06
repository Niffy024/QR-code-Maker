import express from "express";
import ejs from "ejs";


const app=express();
const port=3000;

app.use(express.static('public'));

app.listen(port,()=>{
console.log(`Server is running on port ${port}.`);
});