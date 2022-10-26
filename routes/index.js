const { Router } = require('express')
const router = Router()
const moveController = require('../controllers/moveController')

router.get('/moves', moveController.getMoves)
router.get('/move/:id', moveController.getMoveById)
router.post('/create', moveController.createMove)
router.delete('/delete/:id', moveController.deleteMove)
router.put('/update/:id', moveController.updateMove)

module.exports = router
