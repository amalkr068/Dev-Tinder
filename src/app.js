const express = require("express")
const app = express()


app.get("/user",(req,res,next)=>{
    console.log("1")
   // res.send({name:"Amal",age:23,place:"chy"})
   next()
})

app.get('/user',(req,res)=>{
    console.log("2")
    res.send("amal")
})

app.post('/user',(req,res)=>{
    res.send("data sent successfully")
})

app.delete('/user',(req,res)=>{
    res.send("Data deleted successfully")
})

app.patch('/user',(req,res)=>{
    res.send("Data updated successfully")
})




app.listen(3000,()=>{
    console.log("Server started on 3000 Port")
})