const repliesRoutes = require('express').Router();
const repliesRepo = require('../controllers/replies.repo')
const boardRepo = require('../controllers/boards.repo')
const threadRepo = require('../controllers/threads.repo')



// New Reply To Thread - POST
repliesRoutes.post('/:board/:thread', async (req, res) =>{
    const { thread, board } = req.params
   const { content, passwordDelete } = req.body
   const result = await repliesRepo.insert(thread, content, passwordDelete)
   res.send(result)
   boardRepo.bumpBoard(board)
   threadRepo.bumpThread(thread)
})

// New Reply To Reply - POST
repliesRoutes.post('/:board/:thread/:reply', async (req, res) =>{
    const { thread, board, reply } = req.params
   const { content, passwordDelete } = req.body
   const result = await repliesRepo.insert(thread, content, passwordDelete, reply)
   res.send(result)
   boardRepo.bumpBoard(board)
   threadRepo.bumpThread(thread)
})
// Report Reply - PUT
repliesRoutes.put('/:board/:thread/:reply', async (req, res) =>{
    const { id } = req.body
    const result = await repliesRepo.report(id)
    res.send(result)
})
// Delete Reply - DELETE
repliesRoutes.delete('/:board/:thread/:reply', async (req, res) =>{
    const { id, deletePassword } = req.body
    const result =  await repliesRepo.delete(id, deletePassword)
    res.send(result)
})
module.exports = repliesRoutes
