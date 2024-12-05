const express = require("express")
const app = express()
const {adminAuth,userAuth} = require("./middlewares/auth")

app.use('/admin',adminAuth)

app.get('/admin/Alldatas',(req,res)=>{
res.send("All admin datas")
})


app.get('/admin/Allusers',(req,res)=>{
    throw new error("amal")
 res.send("All user datas")
})

app.get('/admin/Allproducts',(req,res)=>{
     res.send("All product details")
})

app.get('/user',userAuth,(req,res)=>{
    res.send("This is users")
    })


    app.use('/',(err,req,res,next)=>{
        if(err){
            res.status(400).send("Something went wrong.....")
        }
    })




app.listen(3000,()=>{
    console.log("Server started on 3000 Port")
})