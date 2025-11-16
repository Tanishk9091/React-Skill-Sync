const mongoose = require('mongoose')
const { Schema } = mongoose

const ApplicationSchema = new Schema({
  jobId: Number,
  jobTitle: String,
  name: String,
  email: String,
  qualification: String,
  experience: String,
  cover: String,
  resumePath: String,
  resumeName: String,
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Application', ApplicationSchema)
