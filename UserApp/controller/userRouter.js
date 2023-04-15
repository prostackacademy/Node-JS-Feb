import express from 'express'
let router = express.Router()
import jwt from 'jsonwebtoken'
import User from '../model/User.js'

/*
URL: localhost:8080/user/test
*/
router.get("/test", (req, resp) => {
    console.log(`app - running!`)
    resp.send("Test API......")

})

//create mew user

/*
url:localhost:8080/user/add
method:POST
required Fields:name,email,password
*/
router.post("/add", async (req, resp) => {
    //how to read form data?
    let { name, email, password } = req.body;
    console.log(name)
    console.log(email)
    console.log(password)

    try {
        let user = await User.findOne({ email: email })
        if (user) {
            resp.statusCode(401).json({ msg: "User Already Exist" })
        }
        user = User({ name, email, password })
        user = await user.save()
        resp.statusCode(200).json({ msg: "User Reg successfully" })
    }
    catch (e) { }
})

/*
url:localhost:8080/user/login
method:POST
required Fields:email, password
*/
router.post("/login", async (req, resp) => {

    //read login form data
    let { email, password } = req.body
    //console.log(email)
    try {
        let user = await User.findOne({ email: email })
        console.log(user.email + "Test Case 123")
        if (!user) {
            return resp.statusCode(401).json({ msg: "User Not Exits" })
        }

        if (user) {
            console.log(user.password + "Test Case 1234")
            if (user.password == password) {
                //generat token
                console.log(user.password + "Test Case 1234")
                let payload = { email, password }
                let token = jwt.sign(payload, "xyz123", (err, token) => {
                    if (err) throw err;
                    resp.status(200).json({
                        result: "Login Success",
                        token: token,
                    });
                });
                console.log(token)
                resp.statusCode(200).json({ token: token, user: user })
            }
            else {
                return resp.statusCode(401).json({ msg: "Password Not Matching" })
            }
        }


    }
    catch (e) {

    }
})

export default router