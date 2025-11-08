import express  from "express";
const app=express();
const port=5000;

app.get("/docker",(req,res)=>{
     res.send("i work for docker test");
})

app.get("/change",(req,res)=>{
     res.send("change in code docker test");
})

app.listen(port,(req,res)=>{
     console.log("app is listen on port no :5000");
})