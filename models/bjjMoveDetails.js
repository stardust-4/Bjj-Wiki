const { Schema } = require('mongoose')

const BjjMoveDetails = new Schema(
  {
    made_famous_by: { type: String, required: false },
    description: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = BjjMoveDetails
