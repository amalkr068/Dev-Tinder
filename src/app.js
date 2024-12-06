const express = require("express")
const app = express()
const { connectDB } = require('./config/database')
const {User} = require('./models/user')

app.use(express.json())

app.post('/signup',async (req,res)=>{
    
   const newUser = new User(req.body)

    try{
        await newUser.save()
        res.send("data added successfully....!!!")
    }catch (err){
        res.status(400).send("Error :"+err.message)
    }
  
})


app.get('/user',async (req,res)=>{
    const userEmail = req.body.emailId;
    try{
        const users = User.find({emailId:userEmail})
        if(users.length === 0){
            res.status(404).send("User not found")
        } else {
            res.send(users)
        }
    }
    catch(err){
        res.status(404).send("Something went wrong......!!!!")
    }
    
  
})

app.get('/feed',async (req,res)=>{
    try{
        const users = await User.find({})
        if(!users){
            res.status(404).send("users not found.......!!!!!")
        } else {
            res.send(users)
        }
    }
    catch (err){
        res.status(404).send("Something went wrong......!!!!")
    }
  
  
})

app.delete('/user',async (req,res)=>{

    const userId = req.body.userId
    try{
        const users = await User.findByIdAndDelete(userId)
        res.send("Data deleted successfully....!!!")
    }
    catch (err){
        res.status(404).send("Something went wrong......!!!!")
    }
 
})

app.patch('/user',async (req,res)=>{
    const userId = req.body.userId
    const data = req.body
try{
    const users =await User.findByIdAndUpdate(userId,data)
    res.send("Updated successfully.....!!!!")
}
catch (err){
    res.status(404).send("Something went wrong......!!!!")
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









