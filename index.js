console.log("hi")
import 'dotenv/config'
// const express = require("express")
import express from "express"
const app = express()
const port = process.env.PORT

app.get("/",(req,res)=>{
    res.send("<h2>hello World2</h2>")
})

app.get("/login",(req,res)=>{
    res.send("Login Page")
})

app.get("/logout",(req,res)=>{
    res.send("Logout Page")
})

app.listen(port, ()=>{
    console.log(`app is running successfully on port ${port}`)
})
