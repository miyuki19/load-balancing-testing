'use strict'

const express = require('express')
const studentController = require('../../controllers/student.controller')
const router = express.Router()

router.post('/student', studentController.createStudent)
router.get('/student/:id', studentController.getStudentById)
router.put('/student/:id', studentController.updateStudent)
router.delete('/student/:id', studentController.deleteStudent)
router.get('/student', studentController.listStudents)

module.exports = router
