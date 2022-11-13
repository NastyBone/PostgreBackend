const threadRoutes = require('express').Router();
const threadRepo = require('../controllers/threads.repo')
const repliesRepo = require('../controllers/replies.repo')
const boardRepo = require('../controllers/boards.repo')

// Get Specific Thread - GET
threadRoutes.get('/:board/:thread', async (req, res) =>{
    const { thread } = req.params
    const result = await threadRepo.find(thread)
    const replies = await repliesRepo.find(thread);
    result.replies = replies;
    res.send(result)
    
})

// New Thread - POST
threadRoutes.post('/:board', async (req, res) =>{
    const { board } = req.params;
    const {name, content, passwordDelete} = req.body
    const replies  = await threadRepo.insert(name, content, board, passwordDelete);
    boardRepo.bumpBoard(board)
    res.send(replies) 
})
// Report Thread - PUT
threadRoutes.put('/:board/:thread', async (req, res) =>{
    const { thread } = req.params
    const replies = await threadRepo.report(thread)
    res.send(replies)
})
// Delete Thread - DELETE
threadRoutes.delete('/:board/:thread', async (req, res) =>{
    const { thread } = req.params
    const { passwordDelete } = req.body
    const replies = await threadRepo.delete(thread, passwordDelete)
    res.send(replies)
})
module.exports = threadRoutes
