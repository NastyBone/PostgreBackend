const threadRoutes = require('express').Router();
const threadRepo = require('../controllers/threads.repo')

// Get Specific Thread - GET
threadRoutes.get('/:board/:thread', async (req, res) =>{
    const { thread } = req.params
    const { rows } = await threadRepo.find(thread)
    res.send(rows)
})

// New Thread - POST
threadRoutes.post('/:board', async (req, res) =>{
    const { board } = req.params;
    const rows  = await threadRepo.insert(board);
    res.send(rows) 
})
// Report Thread - PUT
threadRoutes.put('/:board/:thread', async (req, res) =>{
    const { thread } = req.params
    const rows = await threadRepo.report(thread)
    res.send(rows)
})
// Delete Thread - DELETE
threadRoutes.delete('/:board/:thread', async (req, res) =>{
    const { thread } = req.params
    const { deletePassword } = req.body
    const rows = await threadRepo.delete(thread, deletePassword)
    res.send(rows)
})
module.exports = threadRoutes
