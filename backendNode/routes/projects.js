const express = require('express')
const router = express.Router()
const Projects = require('../models/Projects')
const Categories = require('../models/Categories')


router.post('/add', function (req, res) {

    const { name } = req.body
    const { desc } = req.body
    const { catId } = req.body
    const { image } = req.body


    if (name !== "" && desc !== "" && image !== "" && catId !== "") {


        const projects = new Projects({
            name,
            desc,
            image,
            catId

        })

        projects.save(function (err, success) {

            res.status(200).json({ status: true, message: "Project added Succcessfully!!!" })

        })

    } else {
        res.status(500).json({ status: false, message: "Please fill the required fields" })
    }

})

router.get('/all', async function (req, res) {

    let categories = await Categories.find({})

    let projects = await Projects.aggregate([
        {
            $lookup: {
                from: "categories",
                localField: "catId",
                foreignField: "_id",
                as: "category"
            }
        },
    ])
    console.log({
        status: true,
        projects,
        categories
    })
    res.status(200).json({
        status: true,
        projects,
        categories
    })

})

module.exports = router