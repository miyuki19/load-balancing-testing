'use strict'

const express = require('express')
const accessController = require('../../controllers/access.controller')
const router = express.Router()

router.get('/access/static', accessController.staticTesting)
router.get('/access/io', accessController.ioHandling)
router.get('/access/calculate', accessController.calculate)
router.get('/access/heavycalculate', accessController.heavyCalculate)

module.exports = router
