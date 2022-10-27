const BjjMove = require('../models/bjjMove')
const BjjMoveDetails = require('../models/bjjMoveDetails')

const getMoveDetails = async (req, res) => {
  try {
    const details = await BjjMoveDetails.find()
    return res.status(200).json({ details })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const getMoveDetailById = async (req, res) => {
  try {
    const { id } = req.params
    const bjjMoveDetails = await BjjMoveDetails.findOne({ id })
    if (bjjMoveDetails) {
      return res.status(200).json({ bjjMoveDetails })
    }
    return res.status(404).send('BjjMove with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const createMoveDetail = async (req, res) => {
  try {
    const bjjMoveDetails = await new BjjMoveDetails(req.body)
    await bjjMoveDetails.save()
    return res.status(201).json({
      bjjMoveDetails
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const deleteMoveDetail = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await BjjMoveDetails.findOneAndDelete({ id })
    if (deleted) {
      return res.status(200).send('BjjMoveDetails deleted')
    }
    throw new Error('BjjMove not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const updateMoveDetail = async (req, res) => {
  const { id } = req.params
  try {
    const bjjMoveDetail = await BjjMoveDetails.findOneAndUpdate(
      { id },
      req.body,
      {
        new: true
      }
    )
    res.status(200).json(bjjMoveDetail)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

/////////////////////////////////////////

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
const updateMove = async (req, res) => {
  const { id } = req.params
  try {
    const bjjMove = await BjjMove.findOneAndUpdate({ id }, req.body, {
      new: true
    })
    res.status(200).json(bjjMove)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
module.exports = {
  getMoves,
  getMoveById,
  createMove,
  deleteMove,
  updateMove,
  getMoveDetails,
  getMoveDetailById,
  createMoveDetail,
  deleteMoveDetail,
  updateMoveDetail
}
