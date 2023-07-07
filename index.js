import express from "express";
import dotenv from "dotenv";


const app= express();
app.use(express.json());

const port = process.env.PORT // 2000

app.get("/", (req, res)=>{
    res.send("fatokun is going live!!!")
});

app.listen(port, ()=>{
    console.log('fatokun is going live!!')
});