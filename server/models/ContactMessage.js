const mongoose = require('mongoose')
const { Schema } = mongoose

const ContactSchema = new Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('ContactMessage', ContactSchema)
