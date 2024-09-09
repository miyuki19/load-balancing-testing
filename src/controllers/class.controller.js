'use strict'

const ClassService = require('../services/class.service')

class ClassController {
  createClass = async (req, res) => {
    try {
      const response = await ClassService.createClass(req.body)
      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  getClassById = async (req, res) => {
    try {
      const { id } = req.params
      const response = await ClassService.getClassById(id)
      if (!response) {
        return res.status(404).json({ error: 'Class not found' })
      }
      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  updateClass = async (req, res) => {
    try {
      const { id } = req.params
      const response = await ClassService.updateClass(id, req.body)
      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  deleteClass = async (req, res) => {
    try {
      const { id } = req.params
      const response = await ClassService.deleteClass(id)
      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  listClasses = async (req, res) => {
    try {
      const response = await ClassService.listClasses()
      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
}

module.exports = new ClassController()
