const express = require('express')
const users = require('./routes/users')
const products = require('./routes/products')

const app = express()
const port = 5000



// users api
app.use('/api/users', users)
app.use('/api/products', products)


app.listen(port, function () {
    console.log("Server is running on port " + port)
})