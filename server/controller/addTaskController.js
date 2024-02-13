const taskListSchema = require('../model/task');

exports.create = async (req, res) => {
    try {
        // console.log(req.body);
        const {title, type, task, completed} = req.body;
        // console.log(title, type, task, completed);
        const newtask = await taskListSchema.create({
            title,
            type,
            task,
            completed,
        });
        console.log(newtask);
        // res.status(200).json(newtask);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

