const boardRoutes = require('./routes/board.routes')
const threadRoutes = require('./routes/thread.routes')
const repliesRoutes = require('./routes/replies.routes')

const express = require('express');
const app = express();

app.use(boardRoutes)
app.use(threadRoutes)
app.use(repliesRoutes)

app.listen(3000, () =>{
    console.log('listening from port 3000')
})