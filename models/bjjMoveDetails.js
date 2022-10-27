// const { Schema } = require('mongoose')

// const BjjMoveDetails = new Schema(
//   {
//     category: { type: String, required: true },
//     description: { type: String, required: true }
//   },
//   { timestamps: true }
// )

// module.exports = BjjMoveDetails

const mongoose = require('mongoose')

const BjjMoveDetails = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('BjjMoveDetails', BjjMoveDetails)
