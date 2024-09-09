'use strict'

const express = require('express')
const classController = require('../../controllers/class.controller')
const router = express.Router()

router.post('/class', classController.createClass)
router.get('/class/:id', classController.getClassById)
router.put('/class/:id', classController.updateClass)
router.delete('/class/:id', classController.deleteClass)
router.get('/class', classController.listClasses)

module.exports = router
