const express = require('express')
const router = express.Router()
const Portfolio = require('../models/Portfolio')

router.post('/add', function (req, res) {

    const { name } = req.body
    const { description } = req.body
    const { images } = req.body
    const { price } = req.body
    const { location } = req.body


    if (name !== "" && description !== "" && images !== "" && price !== "" && location !== "") {


        const portfolio = new Portfolio({
            name,
            description,
            images,
            price,
            location

        })

        portfolio.save(function (err, success) {

            if (err) {
                res.status(500).json({ status: false, message: err })
                return
            }

            res.status(200).json({ status: true, message: "Portfolio added Succcessfully!!!" })

        })

    } else {
        res.status(500).json({ status: false, message: "Please fill the required fields" })
    }

})

router.get('/all', async function (req, res) {

    let portfolio = await Portfolio.find()

    res.status(200).json({
        status: true,
        portfolio
    })

})


router.post('/get', async function (req, res) {

    const { id } = req.body

    if (id !== "") {

        let portfolio = await Portfolio.findOne({ _id: id })

        res.status(200).json({
            status: true,
            portfolio
        })
    }

})

module.exports = router