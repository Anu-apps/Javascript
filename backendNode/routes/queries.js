const express = require('express')
const router = express.Router()
const Queries = require('../models/Queries')

router.post('/add', function (req, res) {

    const { name } = req.body
    const { phone } = req.body
    const { email } = req.body
    const { query } = req.body

    if (name !== "" && phone !== "" && query !== "" && email !== "") {


        const queries = new Queries({
            name,
            email,
            phone,
            query

        })

        queries.save(function (err, success) {

            res.status(200).json({ status: true, message: "Query added Succcessfully!!!" })

        })

    } else {
        res.status(500).json({ status: false, message: "Please fill the required fields" })
    }

})

module.exports = router