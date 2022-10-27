const { Schema } = require('mongoose')

const BjjMoveDetails = new Schema(
  {
    category: { type: String, required: true },
    description: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = BjjMoveDetails
