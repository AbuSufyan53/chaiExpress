console.log("hi")
require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT

app.get("/",(req,res)=>{
    res.send("<h2>hello World2</h2>")
})

app.get("/login",(req,res)=>{
    res.send("Login Page")
})

app.listen(port, ()=>{
    console.log(`app is running successfully on port ${port}`)
})
