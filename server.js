require('dotenv').config()

const express = require('express')
const path = require('path')

const app = express()

const router = require('./routes')

app.use('/api',router)

app.use(express.static(path.join(__dirname,'/public')))

app.get('/exercise',(req,res) => {
  res.sendFile(path.resolve(path.join(__dirname, '/public/exercise.html')))
})

require('./config')
  .then(() => app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}/`)
  }))
  .catch(err => console.error(err))