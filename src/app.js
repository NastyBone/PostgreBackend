const boardRoutes = require('./routes/board.routes')
const threadRoutes = require('./routes/thread.routes')
const repliesRoutes = require('./routes/replies.routes')
const express = require('express');
const bodyParser = require('body-parser')
module.exports = () =>{

    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use(boardRoutes)
    app.use(threadRoutes)
    app.use(repliesRoutes)

    return app
}

