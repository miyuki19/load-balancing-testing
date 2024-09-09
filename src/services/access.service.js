'use strict'
const fs = require('fs').promises
const path = require('path')

class AccessService {
  static ioHandling = async () => {
    const filePath = path.join(__dirname, '../data.json')

    try {
      const data = await fs.readFile(filePath, 'utf-8')
      const jsonData = JSON.parse(data)
      return { data: jsonData }
    } catch (error) {
      throw new Error('Failed to fetch external resource.')
    }
  }

  static calculate = () => {
    const start = Date.now()
    let result = 0

    for (let i = 0; i < 5e5; i++) {
      result += Math.sqrt(i)
    }

    for (let i = 0; i < 5e3; i++) {
      for (let j = 0; j < 5e2; j++) {
        result += Math.log(i + j)
      }
    }

    for (let i = 0; i < 5e2; i++) {
      for (let j = 0; j < 5e2; j++) {
        for (let k = 0; k < 5e1; k++) {
          result += Math.sin(i) * Math.cos(j) * Math.tan(k)
        }
      }
    }

    const duration = Date.now() - start
    return {
      message: `Computation complete. Duration: ${duration}ms`,
    }
  }

  static heavyCalculate = () => {
    const start = Date.now()
    let result = 0

    for (let i = 0; i < 1e6; i++) {
      result += Math.sqrt(i)
    }

    for (let i = 0; i < 1e4; i++) {
      for (let j = 0; j < 1e3; j++) {
        result += Math.log(i + j)
      }
    }

    for (let i = 0; i < 1e3; i++) {
      for (let j = 0; j < 1e3; j++) {
        for (let k = 0; k < 1e2; k++) {
          result += Math.sin(i) * Math.cos(j) * Math.tan(k)
        }
      }
    }

    const duration = Date.now() - start
    return {
      message: `Computation complete. Duration: ${duration}ms`,
    }
  }
}

module.exports = AccessService
