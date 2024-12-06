const express = require("express")
const app = express()
const { connectDB } = require('./config/database')
const {User} = require('./models/user')




app.post('/signup',async (req,res)=>{
    const newUser = new User({
        firstName:"sangeeth",
        lastName:'kr',
        emailId:"sangeeth@gmail.com",
        password:"sangeeth@123",
        gender:"male",
        age:26
    })

    try{
        await newUser.save()
        res.send("data added successfully....!!!")
    }catch (err){
        res.status(400).send("Error :"+err.message)
    }
  
})




connectDB().then(()=>{
    console.log("DB connected successfully")
    app.listen(3000,()=>{
        console.log("Server started on 3000 Port")
    })
    
}).catch((err)=>{
    console.log("DB not connected successfully")
})









