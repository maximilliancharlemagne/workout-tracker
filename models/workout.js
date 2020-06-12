const { Schema, model } = require('mongoose')

module.exports = model('workout', new Schema({
  day: {
    type: Number,
    required: true
  },
  totalDuration: Number,
  exercises: [{}]
}))
