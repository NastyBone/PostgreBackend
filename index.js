const app = require('./src/app');
const pool = require('./src/pool')



pool.connect({
    host: 'localhost',
    port: 5432,
    database: 'annonymous-message-board',
    user: 'postgres',
    password: 'josepc'
}).then(() =>{
    console.log(`Database Connected on Port 5432`)
    app().listen(3000, () => console.log(`Server Connected on Port 3000`))
})
