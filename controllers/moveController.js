const BjjMove = require('../models/bjjMove')
const getMoves = async (req, res) => {
  try {
    const moves = await BjjMove.find()
    return res.status(200).json({ moves })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
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
const deleteMove = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await BjjMove.findOneAndDelete({ id })
    if (deleted) {
      return res.status(200).send('BjjMove deleted')
    }
    throw new Error('BjjMove not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getMoves,
  getMoveById,
  createMove,
  deleteMove
}
