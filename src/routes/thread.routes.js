const threadRoutes = require('express').Router();
const threadRepo = require('../controllers/threads.repo')

// Get Specific Thread - GET
threadRoutes.get('/:board/:thread', async (req, res) =>{
    const { thread } = req.params
    const result = await threadRepo.find(thread)
    res.send(result)
})

// New Thread - POST
threadRoutes.post('/:board', async (req, res) =>{
    const { board } = req.params;
    const {name, content, passwordDelete} = req.body
    const rows  = await threadRepo.insert(name, content, board, passwordDelete);
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
    const { passwordDelete } = req.body
    const rows = await threadRepo.delete(thread, passwordDelete)
    res.send(rows)
})
module.exports = threadRoutes
