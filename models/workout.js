const { Schema, model } = require('mongoose')

let workoutSchema = new Schema(
  {
    day: {
      type: Number,
      required: true
    },
    exercises: [{}]
  },
  {
    timestamps: true, toJSON: {
      virtuals: true
    }
  })

workoutSchema.virtual('totalDuration').get(function () {
  return this.exercises.reduce((total, item) => total + item.duration, 0)
})

module.exports = model('workout', workoutSchema)
