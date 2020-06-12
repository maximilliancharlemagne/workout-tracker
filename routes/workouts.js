const express = require('express')

const router = express.Router()

const { Workout } = require('../models')

router.get('/',(req,res) => {
  Workout.find({},(err, docs) => {
    if(err){console.log(err)}
    res.json(docs)
  })
})

module.exports = router