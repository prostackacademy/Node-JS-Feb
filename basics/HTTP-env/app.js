//importing the required dependencies
const http = require('http')
const dotenv = require('dotenv')

//load env variable 
dotenv.config({ path: './config/config.env' })

let port = process.env.PORT
let host_Name = process.env.HOSTNAME


let server = http.createServer((req, resp) => {
    resp.end("Hello,Good Morning.....")
})
server.listen(port, host_Name, (err) => {
    if (err) throw err
    console.log(`Server Running on http://${host_Name}:${port}`)
})