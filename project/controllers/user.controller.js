const express = require("express")
const passport =require("passport")
var router =express.Router()
var ObjectId = require("mongoose").Types.ObjectId
var {User}= require("../models/usermodel")

router.post("/",(req,res)=>{
    var user =new User({
        name =req.body.name,
        phone =req.body.phone,
        email =req.body.email,
        location:req.body.location,
        password:req.body.password
    })
    user.save((err,doc)=>{
        if(!err){
            res.send(doc);
            console.log("user data saved")
        }
        else {
            console.log("error to save user"+ JSON.stringify(err, undefined, 2))
        }
    });

});
router.get("/user",(req,res)=>{
    User.find((err,doc)=>{
        if(!err){
            res.send(doc);
            console.log("retrive all user datas");
        }
        else{
            console.log("error to retrive user data")
        }
    });
});

router.get("/:id",(req,res)=>{
    if(!ObjectId.isValid,(req.params.id))
        return res.status().send("no user record with this user id")

        User.findById(req.params.id,(err,doc)=>{
            if(!err){
                res.send(doc)
                console.log("retrive the user data")
            }
            else {
                console.log("not retrive the user data")
            }
        })
})

router.put(":id",(req,res)=>{
    if(!ObjectId.isValid,(req.params.id))
    return res.status(400).send("no user record with this user id")
     var user = {
        name =req.body.name,
        phone =req.body.phone,
        email =req.body.email,
        location:req.body.location,
        password:req.body.password
     }
     User.findByIdAndUpdate(req.params.id, {$set:user}, {new:true},(err,doc)=>{
         if(!err){
             res.send(doc)
             console.log("user Update sucessfully")
         }
     });
});

router.get("/login",(req,res,next)=>{
    passport.authenticate('local',(err,user,info)=>{
        if(err)
        return res.status(400).json(err)
        else if(user)
        return res.status(200).json({ "token": user.generatejwt() })
        else 
        return res.status(404).json(info)
    })(req,res)
});