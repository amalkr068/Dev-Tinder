const adminAuth = (req,res,next)=>{
    const token ="xyz"
    const validUser = token ==="xyz"
    if(!validUser){
        res.status(404).send("Error")
    }else {
        next()
    }
    
    }


    const userAuth = (req,res,next)=>{
        const token ="xyz"
        const validUser = token ==="xyz"
        if(!validUser){
            res.status(404).send("Error")
        }else {
            next()
        }
        
        }

    module.exports = {
        adminAuth,
        userAuth
    }

