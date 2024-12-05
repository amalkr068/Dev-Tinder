const express = require("express")
const app = express()


app.get("/user",(req,res)=>{
    res.send({name:"Amal",age:23,place:"chy"})
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