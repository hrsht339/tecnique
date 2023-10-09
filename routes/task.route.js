const express = require("express")
const {taskModel} = require("../models/task.model")

const taskRouter = express.Router()

taskRouter.post("/tasks",async(req,res)=>{
    let task = req.body
    try{
        const tasks = new taskModel(task)
        await tasks.save()
        res.send({
            "msg":"new task added",
            tasks
        })
    }
    catch(err){
        res.send({
            "msg":"add again",
            err
        })
    }
})

taskRouter.get("/tasks",async(req,res)=>{
    try{
        const tasks = await taskModel.find()
        res.send({
            "msg":"all tasks down below",
            tasks
        })
    }
    catch(err){
        res.send({
            "msg":"try again",
            err
        })
    }
})

taskRouter.get("/tasks/:id",async(req,res)=>{
    const id = req.params.id
    try{
        const tasks = await taskModel.findById(id)
        if(tasks){
            res.send({
                "msg":"one task down below",
                tasks
            })
        }
        else{
            res.send({
                "msg":"task does not exist"
            })
        }
        
    }
    catch(err){
        res.send({
            "msg":"try again",
            err
        })
    }
})

taskRouter.put("/tasks/:id",async(req,res)=>{
    const id = req.params.id
    const task = req.body
    try{
        const tasks = await taskModel.findByIdAndUpdate(id,task)
        if(tasks){
            res.send({
                "msg":"one task updated",
                tasks
            })
        }
        else{
            res.send({
                "msg":"task does not exist"
            })
        }
        
    }
    catch(err){
        res.send({
            "msg":"try again",
            err
        })
    }
})

taskRouter.delete("/tasks/:id",async(req,res)=>{
    const id = req.params.id
    try{
        const tasks = await taskModel.findByIdAndDelete(id)
        if(tasks){
            res.send({
                "msg":"one task deleted",
                tasks
            })
        }
        else{
            res.send({
                "msg":"task does not exist"
            })
        }
        
    }
    catch(err){
        res.send({
            "msg":"try again",
            err
        })
    }
})

module.exports = {
    taskRouter
}