const repliesRoutes = require('express').Router();
const repliesRepo = require('../controllers/replies.repo')


// New Reply - POST
repliesRoutes.post('/:board/:thread', async (req, res) =>{
   const { content, password_delete } = req.body
   const rows = await repliesRepo.insert(content, password_delete)
   res.send(rows)
})
// Report Reply - PUT
repliesRoutes.put('/:board/:thread/:reply', async (req, res) =>{
    const { id } = req.body
    const rows = await repliesRepo.report(id)
    res.send(rows)
})
// Delete Reply - DELETE
repliesRoutes.delete('/:board/:thread/:reply', async (req, res) =>{
    const { id, deletePassword } = req.body
    const rows =  await repliesRepo.delete(id, deletePassword)
    res.send(rows)
})
module.exports = repliesRoutes
