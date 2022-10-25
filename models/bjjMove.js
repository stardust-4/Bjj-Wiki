const mongoose = require('mongoose')

const BjjMove = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    imgUrl: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('BjjMove', BjjMove)
