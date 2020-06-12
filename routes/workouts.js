const express = require('express')

const router = express.Router()

const { Workout } = require('../models')

router.get('/',(req,res) => {
  Workout.find({},(err, docs) => {
    for(i =0; i < docs.length; i++){
      docs[i].totalDuration = 0
      for(let index in  docs[i].exercises){
        docs[i].totalDuration += docs[i].exercises[index].duration
      }
    }
    res.json(docs)
  })
})

module.exports = router