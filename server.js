const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const db = require('./db')
const PORT = process.env.PORT || 3001
const app = express()
const routes = require('./routes')
////form//////
// const { BjjMove } = require('./models')

////form//////

// Your Code Here
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', routes)

/////form//////

// app.get('/moves', async (req, res) => {
//   let issues = await BjjMove.find({})
//   res.send(issues)
// })

// app.post('/moves', async (req, res) => {
//   console.log('here is the body', req.body)
//   let newIssue = await BjjMove.create(req.body)
//   res.send(newIssue)
// })

////form/////

db.on('error', console.error.bind(console, 'mongo db connection error'))
app.listen(PORT, () => {
  console.log(`expres server listening on port ${PORT}`)
})
