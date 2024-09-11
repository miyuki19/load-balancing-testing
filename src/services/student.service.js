'use strict'
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class StudentService {
  // Create a new student
  static createStudent = async (data) => {
    try {
      const newStudent = await prisma.student.create({
        data: {
          firstName: data.firstName,
          lastName: data.lastName,
          dateOfBirth: data.dateOfBirth,
          address: data.address,
        },
      })
      return newStudent
    } catch (error) {
      console.error('Error creating student:', error)
      throw error
    }
  }

  // Get a student by ID
  static getStudentById = async (id) => {
    try {
      const studentData = await prisma.student.findUnique({
        where: { studentCode: Number(id) },
      })
      return studentData
    } catch (error) {
      console.error('Error retrieving student:', error)
      throw error
    }
  }

  // Update a student by ID
  static updateStudent = async (id, data) => {
    try {
      const updatedStudent = await prisma.student.update({
        where: { studentCode: Number(id) },
        data,
      })
      return updatedStudent
    } catch (error) {
      console.error('Error updating student:', error)
      throw error
    }
  }

  // Delete a student by ID
  static deleteStudent = async (id) => {
    try {
      const deletedStudent = await prisma.student.delete({
        where: { studentCode: Number(id) },
      })
      return {
        status: 200,
        data: deletedStudent,
      }
    } catch (error) {
      if (error.code === 'P2025') {
        // Handle the case where the record does not exist
        return {
          status: 404,
          error: 'Record not found',
        }
      }
      return {
        status: 500,
        error: 'Internal server error',
      }
    }
  }

  // List all students
  static listStudents = async () => {
    try {
      const students = await prisma.student.findMany()
      return students
    } catch (error) {
      console.error('Error listing students:', error)
      throw error
    }
  }
}

module.exports = StudentService
