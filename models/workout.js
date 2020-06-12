const { Schema, model } = require('mongoose')

module.exports = model('exercise', new Schema({
  day: Number
}))
