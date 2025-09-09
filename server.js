const express= require("express")

const app= express()
app.get('/',(req,res)=>{
    res.send("Hello Word...")
})

app.get('/about',(req,res)=>{
    res.send("<h1> This is About Us page<h1>")
})

app.get('/contact',(req,res)=>{
    res.send("<h1> This is Contact Us page<h1>")
})

app.listen(5000,()=>console.log("server started"))

// http://localhost:5000/
// http://localhost:5000/about
// http://localhost:5000/contact

