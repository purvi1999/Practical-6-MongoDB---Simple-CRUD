const dotenv=require("dotenv").config();
const express=require("express");
const app=express();
const port=7000
//connection with mongoDb
const mongoose=require("mongoose");
mongoose.connect(process.env.Con).then(()=>console.log("Connected to mongoDb Server...."));

const movie_router=require("./router/r_movie.js");
app.use("/",movie_router);
app.listen(port,()=>console.log("Server Runing on Port 7000"));