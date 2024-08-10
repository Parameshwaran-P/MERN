const express = require('express')
const studentModel = require('../models/studentModel');
const router = express.Router()

router.post('/add',(req, res)=>{
     const {name, email, rollno} = req.body;
     
     const student = new studentModel({name, email, rollno});
     student.save()
     .then(()=>{
         res.status(201).json({message:'student added successfully'});
     })
     .catch(()=>{
         res.status(400).json({message:'student not added'});
     })
})

router.get('/all',(req, res)=>{
   const student = studentModel.find();
   student.then((students)=>{
       res.status(200).json(students);
      
   })
   .catch(()=>{
       res.status(400).json({message:'no students found'});
   })
})

module.exports = router;