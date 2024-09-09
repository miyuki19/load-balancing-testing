'use strict'

const AccessService = require('../services/access.service')

class AccessController {
  staticTesting = (req, res) => {
    return res.status(201).json({ message: '-----This is a static API-----' })
  }

  ioHandling = async (req, res) => {
    try {
      const response = await AccessService.ioHandling()
      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  calculate = (req, res) => {
    try {
      const response = AccessService.calculate()
      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  heavyCalculate = (req, res) => {
    try {
      const response = AccessService.heavyCalculate()
      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
}

module.exports = new AccessController()
