const NoticeService = require('../services/notice.service')

class NoticeController {
  async createNotice(req, res) {
    try {
      const response = await NoticeService.createNotice(req.body)
      return res.status(201).json(response)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  async getNoticeById(req, res) {
    try {
      const { id } = req.params
      const response = await NoticeService.getNoticeById(id)
      if (!response) {
        return res.status(404).json({ error: 'Notice not found' })
      }
      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  async updateNotice(req, res) {
    try {
      const { id } = req.params
      const response = await NoticeService.updateNotice(id, req.body)
      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  async deleteNotice(req, res) {
    try {
      const { id } = req.params
      const response = await NoticeService.deleteNotice(id)
      if (response.status === 404) {
        return res.status(404).json({ error: 'Record not found' })
      }
      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  async listNotices(req, res) {
    try {
      const response = await NoticeService.listNotices()
      return res.status(200).json(response)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
}

module.exports = new NoticeController()
