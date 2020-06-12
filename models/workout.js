const { Schema, model } = require('mongoose')

module.exports = model('workout', new Schema({
  day: Number
}))
