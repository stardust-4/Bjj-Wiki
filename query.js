const db = require('./db/moves')
const { BjjMove, BjjMoveDetails } = require('./models')

const findMove = async () => {
  const bjjMove = await BjjMove.findOne()
  console.log(bjjMove)
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
main()
