const express = require('express')
const router = express.Router()
const Users = require('../models/Users')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const saltRounds = 10;

// authentication middleware
function authentication(req, res, next) {
    const authHeader = req?.headers?.authorization || null;
    let refreshToken = req?.headers?.token || null;
    if (authHeader == null || authHeader === "") { return res.status(401).json({ status: false, message: "Unauthorized Access" }); }

    let token = authHeader

    jwt.verify(token, 'BACKEND_NODE', async (err, user) => {
        if (err) {
            switch (err.message) {
                case 'jwt expired':

                    if (refreshToken) {

                        refreshToken = (refreshToken)

                        // fetch refreshTOken from DB
                        const dbUser = await Users.findOne({ refreshToken })

                        if (!dbUser) {

                            return res.status(401).json({ status: false, message: "Invalid Refresh Token, please login again." });

                        }


                        jwt.verify(refreshToken, 'BACKEND_NODE', (err1, user1) => {
                            if (err1) {
                                return res.status(401).json({ status: false, message: "Refresh Token is expired, please login again." });
                            }


                            // new token generation
                            const userData = { _id: user1._id, name: user1.name, email: user1.email, phone: user1.phone };
                            const accessToken = jwt.sign(userData, 'BACKEND_NODE', { expiresIn: "15000" })

                            res.user = {
                                accessToken,
                                ...userData,
                            };

                            next();

                            return


                        })


                    }

                    break;
                case 'invalid token':
                    return res.status(401).json({ status: false, message: "Sorry, You have provided invalid token." });
                    break;
                default:
                    return res.status(401).json({ status: false, message: "Token is a problem with the token." });

            }

        } else {
            res.user = {
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
        res.status(500).json({ status: false, message: "Please fill the required fields" })
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
        const accessToken = jwt.sign(userData, 'BACKEND_NODE', { expiresIn: "15000" })
        const refreshToken = jwt.sign(userData, 'BACKEND_NODE', { expiresIn: "1d" })

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
                date: user.date,
                role: user.role
            }
        })

    } else {
        res.status(401).json({ status: false, message: "Please fill the required fields" })
    }
})


// Get User
// protected api
router.post('/get-user', authentication, async function (req, res) {

    const { _id } = res.user
    if (_id) {

        const user = await Users.findOne({ _id })

        res.status(200).json({
            status: true, user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                date: user.date
            }
        })

    }
})



// Get All User
// protected api
router.get('/get-all-users', authentication, async function (req, res) {

    const { _id } = res.user
    if (_id) {

        const users = await Users.find()

        res.status(200).json({
            status: true, users
        })

    }
})

module.exports = router