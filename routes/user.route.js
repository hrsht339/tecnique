const express = require("express")
const {userModel} = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const userRouter = express.Router()

userRouter.post("/register",async(req,res)=>{
    const {email,password} = req.body
    try{
        let user = await userModel.findOne({email})
        if(user){
            res.send({
                "msg":"user already registered"
            })
        }
        else{
            bcrypt.hash(password,3,async(err,hashed)=>{
                if(hashed){
                    const user = new userModel({
                        email,
                        password:hashed
                    })
                    await user.save()
                    res.send({
                        "msg":"user registered",
                        user
                    })
                }
                else{
                    res.send({
                        "msg":"register again",
                        err
                    })
                }
            })
        }
    }
    catch(err){
        res.send({
            "msg":"register again",
            err
        })
    }
})


userRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body
    try{
        let user = await userModel.findOne({email})
        if(user){
            bcrypt.compare(password,user.password,(err,result)=>{
                if(result){
                    const token = jwt.sign({id:user._id},"harshit")
                    res.send({
                        "msg":"login success",
                        user,
                        token
                    }) 
                }
                else{
                    res.send({
                        "msg":"wrong password",
                        err
                    }) 
                }
            })
        }
        else{
            res.send({
                "msg":"user not found"
            }) 
        }
    }
    catch(err){
        res.send({
            "msg":"login again",
            err
        })
    }
})

module.exports = {
    userRouter
}