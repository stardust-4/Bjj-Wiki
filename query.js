const db = require('./db/moves')
// const dbd = require('/db/details')
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
