const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const db = require('./db')
const PORT = process.env.PORT || 3001
const app = express()
const routes = require('./routes')
// Your Code Here
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', routes)

// app.get(
//   '/move/:id',
//   (req, res, next) => {
//     console.log('middleware run')
//     next()
//   },
//   (req, res) => {
//     res.send({ move: `move with an id of ${req.params.id}` })
//   }
// )

// Your Code Ends Here
db.on('error', console.error.bind(console, 'mongo db connection error'))
app.listen(PORT, () => {
  console.log(`expres server listening on port ${PORT}`)
})
