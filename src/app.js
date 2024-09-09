require('dotenv').config()
const compression = require('compression')
const express = require('express')
const session = require('express-session')
const { default: helmet } = require('helmet')
const morgan = require('morgan')
const generateSecretKey = require('./utils/secretkey')
const app = express()

// Generate a strong secret key
const secretKey = generateSecretKey()

//init middlewares
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Set up session middleware
app.use(
  session({
    secret: secretKey,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set to true if using HTTPS
  })
)

//init routes
app.use('/', require('./routes'))

//handling error

module.exports = app
