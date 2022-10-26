// import myMovesDb from ('./db/moves')
// const getMoves = (req, res) => {
//   res.send({ myMovesDb })
// }
const BjjMove = require('../models/bjjMove')

const getMoves = async (req, res) => {
  try {
    const moves = await BjjMove.find()
    return res.status(200).json({ moves })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const getMoveById = (req, res) => {
  res.send({ move: `move with an id of ${req.params.id}` })
}
const createMove = (req, res) => {
  res.send(req.body)
}

module.exports = {
  getMoves,
  getMoveById,
  createMove
}
