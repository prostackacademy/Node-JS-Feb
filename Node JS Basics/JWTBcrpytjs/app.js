const dotevn = require('dotenv')
const jwt = require('jsonwebtoken')

//load configuration env variables

dotevn.config({ path: './config/config.env' })

let s_Key = process.env.SECRET_KEY
let user = {
    "email": "syed@gmail.com",
    "password": "ILoveCoding"
}
let payload = user;
console.log(s_Key)
let token = jwt.sign(payload, s_Key, { expiresIn: '2m' })
console.log(token)