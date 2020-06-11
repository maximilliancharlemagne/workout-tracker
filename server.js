require('dotenv').config()

const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname,'/public')))

app.get('/exercise',(req,res) => {
  res.sendFile(path.resolve(path.join(__dirname, '/public/exercise.html')))
})

app.listen(process.env.PORT,() => {
  console.log(`http://localhost:${process.env.PORT}/`)
})