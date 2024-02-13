const mongoose = require("mongoose");

const taskListSchema  = mongoose.Schema({
    // list: [
    //     {
            // title: String,
            // type: String,
            // task: String,
            // completed: Boolean,
    //     },
    // ],
    // pin: Number,
    // // timestamps: true,
    title: String,
    type: String,
    task: String,
    completed: Boolean,
    pin: Number,
});

const task = mongoose.model('task', taskListSchema);
module.exports = task;