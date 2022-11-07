const threadRoutes = require('express').Router();

// Get Threads - GET
threadRoutes.get('/:board/:thread', async (req, res) =>{
    const params = req.params
    res.send('on threads, showing replies', ...params)
})

// New Thread - POST
threadRoutes.post('/:board', async (req, res) =>{
    res.send('on board, creating a thread')
})
// Report Thread - PUT
threadRoutes.put('/:board', async (req, res) =>{
    res.send('on board, reporting a thread')
})
// Delete Thread - DELETE
threadRoutes.delete('/:board', async (req, res) =>{
    res.send('on board, deleting a thread')
})
module.exports = threadRoutes
