const express = require("express")
const app = express()
const {adminAuth} = require("./middlewares/auth")

app.use('/admin',adminAuth)

app.get('/admin/Alldatas',(req,res)=>{
res.send("All admin datas")
})


app.get('/admin/Allusers',(req,res)=>{
 res.send("All user datas")
})

app.get('/admin/Allproducts',(req,res)=>{
     res.send("All product details")
})





app.listen(3000,()=>{
    console.log("Server started on 3000 Port")
})