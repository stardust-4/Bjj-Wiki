const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const app = express()
const routes = require('./routes')
const moveController = require('./controllers/moveController')
// Your Code Here
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api', routes)

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
app.listen(PORT, () => {
  console.log(`expres server listening on port ${PORT}`)
})
