const express = require('express')

const router = express.Router()

const { Workout } = require('../models')

router.get('/',(req,res) => {
  Workout.find({},(err, docs) => {
    res.json(docs)
  })
})

router.put('/:id',(req,res) => {
  // req.body is a new exercise
  Workout.findOneAndUpdate({_id: req.params.id},{$push: { exercises: req.body}},{new: true},(err, doc) => {
    if(err){console.log(err)}
    res.json(doc)
  })
})

router.post('/', (req,res) => {
  Workout.create({day: new Date()}, (err,doc) => {
    res.json(doc)
  })
})

router.get('/range', (req, res) => {
  Workout.find({}, (err, docs) => {
    res.json(docs)
  })
})

module.exports = router