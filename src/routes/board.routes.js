const boardRoutes = require('express').Router();
const boardRepo = require('../controllers/boards.repo')
const threadRepo = require('../controllers/threads.repo')
const repliesRepo = require('../controllers/replies.repo')

// Get Boards - GET
boardRoutes.get('/', async (req, res) =>{
    const boards = await boardRepo.find()
    res.send(boards)
})
// Get Specific Board - GET 
boardRoutes.get('/:board', async (req, res) =>{
    const boardId = req.params.board
    const board = await boardRepo.findById(boardId)
    const threads = await threadRepo.findByBoard(boardId)
    const replies = await repliesRepo.findAllWithLimit()

   for (let i = 0; i< threads.length; i++){
            threads[i].replies = [];
            threads[i].replies.push(...replies.filter(reply => reply.threadId == threads[i].id))
   }
    board.threads = threads;
   
    res.send(board)
})


module.exports = boardRoutes