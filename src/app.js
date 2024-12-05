const express = require("express")
const app = express()



app.use('/test',(req,res)=>{
    res.end("This is Test page")
})

app.use('/hello',(req,res)=>{
    res.end("This is Hello page")
})

app.listen(3000,()=>{
    console.log("Server started on 3000 Port")
})