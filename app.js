import express from "express";
import ejs from "ejs";
import QRCode from 'qrcode';


const app=express();
const port=3000;

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

async function QRCodeGenerator(text) {
  try {
    const result = await QRCode.toDataURL(text);
    return result;
  } catch (err) {
    console.error(err);
  }
}

app.get("/",(req,res)=>{
res.render("index.ejs",{qr:null});
});

app.post("/generate", async (req,res)=>{
    var url= req.body.url;
    //console.log(url);
    const result= await QRCodeGenerator(url);
    res.render("index.ejs", {qr: result});

});

app.listen(port,()=>{
console.log(`Server is running on port ${port}.`);
});