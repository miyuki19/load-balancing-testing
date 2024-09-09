'use strict'

const express = require('express')
const classAffiliationController = require('../../controllers/classAffiliation.controller')
const router = express.Router()

router.post(
  '/classAffiliation',
  classAffiliationController.createClassAffiliation
)
router.get(
  '/classAffiliation/:id',
  classAffiliationController.getClassAffiliationById
)
router.put(
  '/classAffiliation/:id',
  classAffiliationController.updateClassAffiliation
)
router.delete(
  '/classAffiliation/:id',
  classAffiliationController.deleteClassAffiliation
)
router.get(
  '/classAffiliation',
  classAffiliationController.listClassAffiliations
)

module.exports = router
