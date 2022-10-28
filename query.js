const db = require('./db/moves')

const { BjjMove } = require('./models')
const { BjjMoveDetails } = require('./models')

const findMove = async () => {
  const bjjMove = await BjjMove.findOne()
  console.log(bjjMove)
}
const findMoveDetails = async () => {
  const bjjMoveDetails = await BjjMoveDetails.findOne()
  console.log(bjjMoveDetails)
}

/////form//////

// app.get('/moves', async (req, res) => {
//   let issues = await BjjMove.find({})
//   res.send(issues)
// })

// app.post('/moves', async (req, res) => {
//   console.log('here is the body', req.body)
//   let newIssue = await BjjMove.create(req.body)
//   res.send(newIssue)
// })

////form/////
const main = async () => {
  try {
    await findMove()
  } catch (error) {
    console.log(error)
  } finally {
    await db.close()
  }
}
const mainDetails = async () => {
  try {
    await findMoveDetails()
  } catch (error) {
    console.log(error)
  } finally {
    await db.close()
  }
}
main()
mainDetails()
