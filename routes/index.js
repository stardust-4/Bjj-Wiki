const { Router } = require('express')
const router = Router()
const moveController = require('../controllers/moveController')

router.get('/details', moveController.getMoveDetails)
router.get('/detail/:id', moveController.getMoveDetailById)
router.post('/createDetail', moveController.createMoveDetail)
router.delete('/deleteDetail/:id', moveController.deleteMoveDetail)
router.put('/updateDetail/:id', moveController.updateMoveDetail)

//////////////////////
router.get('/moves', moveController.getMoves)
router.get('/move/:id', moveController.getMoveById)
router.post('/create', moveController.createMove)
router.delete('/delete/:id', moveController.deleteMove)
router.put('/update/:id', moveController.updateMove)

module.exports = router
