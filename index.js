const express = require("express")
const app = express()
const {connection} = require("./config/db")
const {userRouter} = require("./routes/user.route")
const {taskRouter} = require("./routes/task.route")
const {authentication} = require("./middleware/authentication")
const { rateLimit } = require('express-rate-limit')

app.use(express.json())


const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 1 minute
	limit: 10, // Limit each IP to 10 requests per `window` (here, per 1 minute)
})

app.use(limiter)
app.use("/",(req,res)=>{
    res.send("welcome to harshit's task manager website")
})
app.use("/",userRouter)
app.use(authentication)
app.use("/",taskRouter)

app.listen(4500,async()=>{
    try{
        await connection
        console.log("db connected")
    }
    catch(err){
        console.log(err)
    }
    console.log("server connected")
})