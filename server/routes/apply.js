const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const Application = require('../models/Application')

const uploadDir = path.join(__dirname, '..', 'uploads')
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true })

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
})
const upload = multer({ storage })

// POST /api/apply
router.post('/apply', upload.single('resume'), async (req, res) => {
  try {
    const { jobId, jobTitle, name, email, qualification, experience, cover } = req.body
    const resume = req.file
    if (!name || !email || !resume) return res.status(400).json({ error: 'Missing fields' })
    const doc = new Application({
      jobId: jobId ? Number(jobId) : null,
      jobTitle,
      name,
      email,
      qualification,
      experience,
      cover,
      resumePath: resume ? `/uploads/${path.basename(resume.path)}` : null,
      resumeName: resume ? resume.originalname : null
    })
    await doc.save()
    res.json({ ok: true, id: doc._id })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

module.exports = router
