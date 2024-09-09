'use strict'
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class ClassAffiliationService {
  // Create a new class affiliation
  static createClassAffiliation = async (data) => {
    try {
      const newClassAffiliation = await prisma.classAffiliation.create({
        data: {
          classId: data.classId,
          studentId: data.studentId,
          startDate: data.startDate,
          endDate: data.endDate,
        },
      })
      return newClassAffiliation
    } catch (error) {
      console.error('Error creating class affiliation:', error)
      throw error
    }
  }

  // Get a class affiliation by ID
  static getClassAffiliationById = async (id) => {
    try {
      const classAffiliationData = await prisma.classAffiliation.findUnique({
        where: { id: Number(id) },
        include: {
          Class: true,
          Student: true,
        },
      })
      return classAffiliationData
    } catch (error) {
      console.error('Error retrieving class affiliation:', error)
      throw error
    }
  }

  // Update a class affiliation by ID
  static updateClassAffiliation = async (id, data) => {
    try {
      const updatedClassAffiliation = await prisma.classAffiliation.update({
        where: { id: Number(id) },
        data,
      })
      return updatedClassAffiliation
    } catch (error) {
      console.error('Error updating class affiliation:', error)
      throw error
    }
  }

  // Delete a class affiliation by ID
  static deleteClassAffiliation = async (id) => {
    try {
      const deletedClassAffiliation = await prisma.classAffiliation.delete({
        where: { id: Number(id) },
      })
      return deletedClassAffiliation
    } catch (error) {
      console.error('Error deleting class affiliation:', error)
      throw error
    }
  }

  // List all class affiliations
  static listClassAffiliations = async () => {
    try {
      const classAffiliations = await prisma.classAffiliation.findMany({
        include: {
          Class: true,
          Student: true,
        },
      })
      return classAffiliations
    } catch (error) {
      console.error('Error listing class affiliations:', error)
      throw error
    }
  }
}

module.exports = ClassAffiliationService
