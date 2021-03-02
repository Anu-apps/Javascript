const express = require('express')
const router = express.Router()
const Users = require('../models/Users')
const bcrypt = require('bcrypt');
const saltRounds = 10;

// User Registration API

router.post('/register', async function (req, res) {

    const { name, phone, email, password } = req.body

    if (name !== "" && phone !== "" && email !== "" && password !== "") {

        let passwordHash = await bcrypt.hash(password, saltRounds)

        const user = new Users({
            name,
            phone,
            email,
            password: passwordHash
        })

        user.save(function (err, success) {

            res.status(200).json({ status: true, message: "User Registered Succcessfully!!!" })

        })

    } else {
        res.status(500).json({ status: false, message: "Please fill the rquired fields" })
    }

})

module.exports = router