const express = require('express')
const router = express.Router()
const Categories = require('../models/Categories')

router.post('/add', function (req, res) {
    const { name } = req.body

    if (name !== "") {


        const categories = new Categories({
            name,

        })

        categories.save(function (err, success) {

            res.status(200).json({ status: true, message: "Category added Succcessfully!!!" })

        })

    } else {
        res.status(500).json({ status: false, message: "Please fill the required fields" })
    }

})

module.exports = router