const boardRoutes = require('express').Router();
const boardRepo = require('../controllers/boards.repo')

// Get Boards - GET
boardRoutes.get('/', async (req, res) =>{
    const boards = await boardRepo.find()
    res.send(boards)
})
// Get Specific Board - GET 
boardRoutes.get('/:board', async (req, res) =>{
    const boardId = req.params.board
    const board = await boardRepo.findById(boardId)
    res.send(board)
})
// Bump Board - PUT

module.exports = boardRoutes