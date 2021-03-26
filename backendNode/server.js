const express = require('express')
const mongoose = require('mongoose');
const users = require('./routes/users')
const products = require('./routes/products')
const bodyParser = require('body-parser')
const categories = require('./routes/categories')
const projects = require('./routes/projects')
const queries = require('./routes/queries')
const portfolio = require('./routes/portfolio')

const app = express()
const port = 5000


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// users api
app.use('/api/users', users)
app.use('/api/products', products)
app.use('/api/categories', categories)
app.use('/api/projects', projects)
app.use('/api/queries', queries)
app.use('/api/portfolio', portfolio)

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

