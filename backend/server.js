const dotenv = require('dotenv')
const http = require('http')
const app = require('./src/app')


dotenv.config()
const PORT = process.env.PORT||4000


const server = http.createServer(app)

server.listen(PORT,()=>{
    console.log('server started on port 3000 or 4000');
})