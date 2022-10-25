// const express = require('express')
// const moves = require('./moves')
// const PORT = process.env.PORT || 3001
// const app = express()
const mongoose = require('mongoose')

require('dotenv').config()

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
// mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db
