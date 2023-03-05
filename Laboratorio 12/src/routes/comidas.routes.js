const express = require('express')
const path = require('path')
let ejs = require('ejs');
const router = express.Router()

router.get('/hamburguesa', (req, res, next) => {
    res.render(path.join(__dirname, "..", "views", "comidas", "hamburguesa.ejs"))
})

router.post('/hamburguesa', (req, res, next) => {
    const num = req.body.numHamburguesa
    res.render(path.join(__dirname, "..", "views", "comidas", "hamburguesa_post.ejs"), {num : num})
})

module.exports = router;