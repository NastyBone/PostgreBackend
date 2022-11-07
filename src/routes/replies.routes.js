const repliesRoutes = require('express').Router();

// New Reply - POST
repliesRoutes.post('/:board/:thread', async (req, res) =>{
    res.send('on thread, creating a reply')
})
// Report Reply - PUT
repliesRoutes.put('/:board/:thread/:reply', async (req, res) =>{
    res.send('on thread, reporting a reply')
})
// Delete Reply - DELETE
repliesRoutes.delete('/:board/:thread/:reply', async (req, res) =>{
    res.send('on board, deleting reply')
})
module.exports = repliesRoutes
