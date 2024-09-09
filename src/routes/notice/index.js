const express = require('express')
const noticeController = require('../../controllers/notice.controller')
const router = express.Router()

router.post('/notice', noticeController.createNotice)
router.get('/notice/:id', noticeController.getNoticeById)
router.put('/notice/:id', noticeController.updateNotice)
router.delete('/notice/:id', noticeController.deleteNotice)
router.get('/notice', noticeController.listNotices)

module.exports = router
