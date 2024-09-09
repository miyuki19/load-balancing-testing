'use strict'

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  return res.status(200).json({ message: '-----LOAD BALANCING TESTING-----' })
})

router.get('/favicon.ico', (req, res) => {
  return res.status(204)
})

router.use('/v1/api', require('./access'))
router.use('/v1/api', require('./class'))
router.use('/v1/api', require('./student'))
router.use('/v1/api', require('./classAffiliation'))
router.use('/v1/api', require('./notice'))

module.exports = router
