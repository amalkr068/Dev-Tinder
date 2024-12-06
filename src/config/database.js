const mongoose = require('mongoose')

const connectDB = async ()=>{
   await mongoose.connect('mongodb+srv://amalkr067:FKEyYgzdWkC6QDQU@namaste-node-js.9ajht.mongodb.net/DevTinder')
}



module.exports = {connectDB}