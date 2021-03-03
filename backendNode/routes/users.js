const express = require('express')
const router = express.Router()
const Users = require('../models/Users')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const saltRounds = 10;

function authentication(req, res, next) {
    const authHeader = req?.headers?.authorization || null;
    if (authHeader == null || authHeader === "") { return res.status(401).json({ status: false, message: "Unauthorized Access" }); }

    let token = JSON.parse(authHeader)

    jwt.verify(token, 'BACKEND_NODE', (err, user) => {
        if (err) {
            return res.status(401).json({ status: false, message: "Token is expired, please login again." });
        } else {
            res.locals.user = {
                accessToken: token,
                ...user,
            };
            next();
        }
    });
}

// User Registration API
// public api
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


// Login user
// public api
router.post('/login', async function (req, res) {

    const { email, password } = req.body

    if (email !== "" && password !== "") {

        const user = await Users.findOne({ email })

        if (!user) {
            return res.status(401).json({ status: false, message: "This user doesn't exist." })
        }

        const validatePassword = await bcrypt.compare(password, user.password)

        if (!validatePassword) {
            return res.status(401).json({ status: false, message: "Invalid Password" })
        }

        // valid user and generate token

        const userData = { _id: user._id, name: user.name, email: user.email, phone: user.phone };
        const accessToken = jwt.sign(userData, 'BACKEND_NODE', { expiresIn: "600000" })
        const refreshToken = jwt.sign(userData, 'BACKEND_NODE', { expiresIn: "1800000" })

        await Users.updateOne({ _id: user._id }, {
            $set: {
                accessToken,
                refreshToken
            }
        })

        res.status(200).json({
            success: true,
            message: "User Logged In Successfully",
            accessToken,
            refreshToken,
            user: {
                _id: user._id,
                email: user.email,
                name: user.name,
                phone: user.phone,
                date: user.date
            }
        })

    } else {
        res.status(401).json({ status: false, message: "Please fill the required fields" })
    }
})


// Get User
// protected api
router.post('/get-user', authentication, async function (req, res) {

    const { _id } = req.body
    if (_id) {

        const user = await Users.findOne({ _id })
        res.status(200).json({ status: true, user: { name: user.name, email: user.email, phone: user.phone, date: user.date } })

    }
})

module.exports = router