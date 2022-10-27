const mongoose = require('mongoose')
const BjjMoveDetailsSchema = require('./bjjMoveDetails')
const BjjMoveSchema = require('./bjjMove')

const BjjMoveDetails = mongoose.model('BjjMoveDetails', BjjMoveDetailsSchema)
const BjjMove = mongoose.model('BjjMove', BjjMoveSchema)

module.exports = {
  BjjMove,
  BjjMoveDetails
}
