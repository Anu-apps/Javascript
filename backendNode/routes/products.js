const express = require('express')
const router = express.Router()

router.get('/products', function (req, res) {
    res.json([
        {
            id: 1,
            name: "Remi",

        },
        {
            id: 2,
            name: "Remi",

        },
        {
            id: 5,
            name: "Remi",

        }
    ])
})

module.exports = router