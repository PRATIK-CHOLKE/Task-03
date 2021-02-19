const express = require('express');
const mongoose = require('mongoose');
const learner = require('../models/student')
const route = express.Router();

route.post('/', async (req, res)=> {
    const {name, branch, rollno} = req.body;
    let user = {};
    user.name = name;
    user.branch = branch;
    user.rollno = rollno;
    let studModel = new learner(user);
    await studModel.save();
    res.json(studModel);
});

route.get('/', async(req, res) => {
    try{
        const studs = await learner.find()
        res.json(studs)
    }catch(err){
        res.send('Error' + err);
    }
});

route.get('/:id', async(req, res) => {
    try{
        const stud = await learner.findById(req.params.id)
        res.json(stud)
    }catch(err){
        res.send('Error' + err);
    }
});

route.patch('/:id', async(req, res) => {
    try{
        const stud = await learner.findById(req.params.id)
        stud.branch = req.body.branch 
        const s = await stud.save()
        res.json(s)
    }catch(err){
        res.send('Error' + err)
    }
})

route.delete('/:id', async(req, res) => {
    try{
        const stud = await learner.findById(req.params.id)
        stud.branch = req.body.branch 
        const s = await stud.remove()
        res.json(s)
    }catch(err){
        res.send('Error' + err)
    }
})

module.exports = route;