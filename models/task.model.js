const mongoose = require("mongoose")

const taskSchema = mongoose.Schema({
    title: String,
    description: String,
    creationDate: { type: Date, default: Date.now },
    status: { type: String, default: "pending" }
})

const taskModel = mongoose.model("task",taskSchema)

module.exports = {
    taskModel   
}