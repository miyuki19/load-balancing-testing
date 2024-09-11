'use strict'

const StudentService = require('../services/student.service')

class StudentController {
  createStudent = async (req, res) => {
    try {
      const response = await StudentService.createStudent(req.body)
      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  getStudentById = async (req, res) => {
    try {
      const { id } = req.params
      const response = await StudentService.getStudentById(id)
      if (!response) {
        return res.status(404).json({ error: 'Student not found' })
      }
      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  updateStudent = async (req, res) => {
    try {
      const { id } = req.params
      const response = await StudentService.updateStudent(id, req.body)
      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  deleteStudent = async (req, res) => {
    try {
      const { id } = req.params
      const response = await StudentService.deleteStudent(id)
      if (response.status === 404) {
        return res.status(404).json({ error: 'Record not found' })
      }
      return res.status(200).json(response.data)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  listStudents = async (req, res) => {
    try {
      const response = await StudentService.listStudents()
      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
}

module.exports = new StudentController()
