const express = require('express')
const mongoose = require('mongoose');
const users = require('./routes/users')
const products = require('./routes/products')
const bodyParser = require('body-parser')

const app = express()
const port = 5000


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// users api
app.use('/api/users', users)
app.use('/api/products', products)

mongoose.connect('mongodb://localhost:27017/backendNode', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, function () {
    console.log("MongoDB is running ")
});

app.listen(port, function () {
    console.log("Server is running on port " + port)
})

