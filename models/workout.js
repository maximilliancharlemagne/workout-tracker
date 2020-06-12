const { Schema, model } = require('mongoose')

module.exports = model('exercise', new Schema({
  type: String,
  workouts: [{
  type: String,
  name: String,
  distance: Number,
  duration: Number,
  weight: Number,
  sets: Number,
  reps: Number
}]
}))
