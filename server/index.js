require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 4000
const MONGODB_URI = process.env.MONGODB_URI

// connect to MongoDB
if (!MONGODB_URI) {
  console.warn('MONGODB_URI not set. Backend will run but DB will not be connected.')
} else {
  mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Mongo connection error', err))
}

// routes
const authRoutes = require('./routes/auth')
const contactRoutes = require('./routes/contact')
const applyRoutes = require('./routes/apply')

app.use('/api', authRoutes)
app.use('/api', contactRoutes)
app.use('/api', applyRoutes)

// serve uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.get('/', (req, res) => res.json({ ok: true }))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
