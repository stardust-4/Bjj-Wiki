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
// const getMoveById = (req, res) => {
//   res.send({ move: `move with an id of ${req.params.id}` })
// }

// const getPlantById = async (req, res) => {
//   try {
//     const { id } = req.params
//     const plant = await Plant.findById(id)
//     if (plant) {
//       return res.status(200).json({ plant })
//     }
//     return res.status(404).send('Plant with the specified ID does not exists')
//   } catch (error) {
//     return res.status(500).send(error.message)
//   }
// }

const getMoveById = async (req, res) => {
  try {
    const { id } = req.params
    const bjjMove = await BjjMove.findOne({ id })
    if (bjjMove) {
      return res.status(200).json({ bjjMove })
    }
    return res.status(404).send('BjjMove with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createMove = async (req, res) => {
  try {
    const bjjMove = await new BjjMove(req.body)
    await bjjMove.save()
    return res.status(201).json({
      bjjMove
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getMoves,
  getMoveById,
  createMove
}
