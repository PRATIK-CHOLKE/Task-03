const express = require('express');
const { addListener } = require('../models/student');
const router = express.Router();
const Stud = require('../models/student')

router.get('/', async(req, res) => {
    try{
        const studs = await Stud.find()
        res.json(studs)
    }catch(err){
        res.send('Error' + err);
    }
});

router.get('/:id', async(req, res) => {
    try{
        const stud = await Stud.findById(req.params.id)
        res.json(stud)
    }catch(err){
        res.send('Error' + err);
    }
});

router.post('/', async(req, res) => {
    const stud = new Stud({
        name: req.body.name,
        branch: req.body.branch,
        rollno: req.body.rollno
    })
    try{
        const s1 = await stud.save()
        res.json(s1)
    }catch(err){
        res.send("Error"+err)
    }
})

router.patch('/:id', async(req, res) => {
    try{
        const stud = await Stud.findById(req.params.id)
        stud.branch = req.body.branch 
        const s = await stud.save()
        res.json(s)
    }catch(err){
        res.send('Error' + err)
    }
})

router.delete('/:id', async(req, res) => {
    try{
        const stud = await Stud.findById(req.params.id)
        stud.branch = req.body.branch 
        const s = await stud.remove()
        res.json(s)
    }catch(err){
        res.send('Error' + err)
    }
})

module.exports = router