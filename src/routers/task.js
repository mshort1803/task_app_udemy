const express = require('express')
const Task = require("../models/task");
const router = new express.Router()

router.post('/tasks', async (req, res) => {
    const task = new Task(req.body);

    try {
        await task.save();
        res.status(201).send(task)
    } catch(e) {
        res.status(404).send(e);
    }
});

router.get('/tasks', async (req, res) => {
    try {
        console.log("tasks")
        const result = await Task.find({});
        if(!result) {
            return res.status(404).send("Couldn't find tasks")
        }
        return res.send(result)
    } catch (e) {
        res.send(e)
    }
});

router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const result = await Task.findById(_id);
        if(!result) {
            return res.status(404).send("Couldn't find task");
        }
        res.send(result);
    } catch (e) {
        res.send(e);
    }
})

router.patch('/tasks/:id', async (req, res) => {
    const allowedUpdates = ['description', 'completed'];
    const updates = Object.keys(req.body);
    const isUpdateValid = updates.every(update => allowedUpdates.includes(update));

    if(!isUpdateValid) {
        return res.status(400).send({error: 'Invalid updates'});
    }
    try {
        const task = await Task.findById(req.params.id)
        updates.forEach(update => task[update] = req.body[update])

        await task.save()
        if(!task) {
            return res.status(404).send();
        }
        res.send(task);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        console.log(task);

        if(!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send();
    }
})

module.exports = router