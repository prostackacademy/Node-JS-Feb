import express from 'express'
let product_Router = express.Router()

product_Router.get("/test", (req, resp) => {
    resp.send("Routing")
})
product_Router.get("/", (req, resp) => {
    resp.send("root Routing")
})
export default product_Router;