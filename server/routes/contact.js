const express = require('express')
const router = express.Router()
const ContactMessage = require('../models/ContactMessage')

// POST /api/contact
router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body
    if (!name || !email || !message) return res.status(400).json({ error: 'Missing fields' })
    const doc = new ContactMessage({ name, email, message })
    await doc.save()
    res.json({ ok: true, id: doc._id })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

module.exports = router
