app.get('/', moveController.getMoves)
app.get('/move/:id', moveController.getMoveById)
app.post('/create', moveController.createMove)
