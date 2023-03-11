const http = require('http')
const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')

//load env content into proces.env
dotenv.config({ path: './config/config.env' })
let port = process.env.PORT
let host = process.env.HOSTNAME

let server = http.createServer((req, resp) => {
    let url = req.url
    console.log(url)
})

server.listen(port, host, (err) => {
    if (err) throw err
    console.log(`Server Running sunday also: http://${host}:${port}`)

})