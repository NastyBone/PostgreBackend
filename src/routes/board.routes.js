const boardRoutes = require('express').Router();

// Get Boards - GET
boardRoutes.get('/', async (req, res) =>{
    res.send('on boards')
})
// Get Specific Board - GET 
boardRoutes.get('/:board', async (req, res) =>{
    
    res.send('on board, showing threads')
})
// Bump Board - PUT

module.exports = boardRoutes