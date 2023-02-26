const dotenv = require('dotenv')
dotenv.config({ path: "./config/config.env" })
//Loads .env file contents into process.env

let age = process.env.AGE
let name = process.env.NAME
console.log(name)