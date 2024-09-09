'use strict'
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class ClassService {
  // Create a new class
  static createClass = async (data) => {
    try {
      const newClass = await prisma.class.create({
        data: {
          name: data.name,
        },
      })
      return newClass
    } catch (error) {
      console.error('Error creating class:', error)
      throw error
    }
  }

  // Get a class by ID
  static getClassById = async (id) => {
    try {
      const classData = await prisma.class.findUnique({
        where: { id: Number(id) },
      })
      return classData
    } catch (error) {
      console.error('Error retrieving class:', error)
      throw error
    }
  }

  // Update a class by ID
  static updateClass = async (id, data) => {
    try {
      const updatedClass = await prisma.class.update({
        where: { id: Number(id) },
        data,
      })
      return updatedClass
    } catch (error) {
      console.error('Error updating class:', error)
      throw error
    }
  }

  // Delete a class by ID
  static deleteClass = async (id) => {
    try {
      const deletedClass = await prisma.class.delete({
        where: { id: Number(id) },
      })
      return deletedClass
    } catch (error) {
      console.error('Error deleting class:', error)
      throw error
    }
  }

  // List all classes
  static listClasses = async () => {
    try {
      const classes = await prisma.class.findMany()
      return classes
    } catch (error) {
      console.error('Error listing classes:', error)
      throw error
    }
  }
}

module.exports = ClassService
