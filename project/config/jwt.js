const jwt =require("jsonwebtoken")
const express =require("express")
const router =express.Router

router.jwt((req,res,next)=>{
var tocken
if('autherization' in req.headers)
    tocken= req.headers['autherization'].split(' ')[1]
    if(!tocken)
    return res.status(403).send({auth:false, message:'no tocken provided'})
    else {
        jwt.verify(tocken,process.env.JWT_SECRET,(err,decoded)=>{
            if(err)
            return res.status(500).send({auth:false,message:"tocken authentication faild!"})
            else{
            req._id=decoded._id
            next();
            }
        })
    }        
})

