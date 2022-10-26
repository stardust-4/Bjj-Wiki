const { Router } = require('express')
const router = Router()
const moveController = require('../controllers/moveController')

router.get('/moves', moveController.getMoves)
router.get('/move/:id', moveController.getMoveById)
router.post('/create', moveController.createMove)
router.delete('/delete/move/:id', moveController.deleteMove)

module.exports = router
