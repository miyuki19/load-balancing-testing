'use strict'

const ClassAffiliationService = require('../services/classAffiliation.service')

class ClassAffiliationController {
  createClassAffiliation = async (req, res) => {
    try {
      const response = await ClassAffiliationService.createClassAffiliation(
        req.body
      )
      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  getClassAffiliationById = async (req, res) => {
    try {
      const { id } = req.params
      const response = await ClassAffiliationService.getClassAffiliationById(id)
      if (!response) {
        return res.status(404).json({ error: 'Class affiliation not found' })
      }
      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  updateClassAffiliation = async (req, res) => {
    try {
      const { id } = req.params
      const response = await ClassAffiliationService.updateClassAffiliation(
        id,
        req.body
      )
      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  deleteClassAffiliation = async (req, res) => {
    try {
      const { id } = req.params
      const response = await ClassAffiliationService.deleteClassAffiliation(id)
      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  listClassAffiliations = async (req, res) => {
    try {
      const response = await ClassAffiliationService.listClassAffiliations()
      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
}

module.exports = new ClassAffiliationController()
