const express = require('express')
const router = express.Router()

router.get('/all', function (req, res) {
    res.json([
        {
            id: 1,
            name: "Remi",
            phone: "32323232332"
        },
        {
            id: 2,
            name: "Remi",
            phone: "32323232332"
        },
        {
            id: 3,
            name: "Remi",
            phone: "32323232332"
        }
    ])
})

module.exports = router