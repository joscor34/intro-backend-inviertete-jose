'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = Schema({
  name: String,
  price: Number,
  description: String,
  category: {
    type: String,
    enum: ['computers', 'phones']
  }
})

module.exports = mongoose.model('Product', productSchema)