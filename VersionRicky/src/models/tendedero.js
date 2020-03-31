const mongoose = require('mongoose')
const validator = require('validator')

//Fecha creada

const TendederoSchema = new mongoose.Schema({
  TendederoID: {
    type: String,
    required: true
  },
  Titulo: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    default: false
  },
  CreadoPor: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Sorora'
  }
  /*
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
  */
})

const Tendedero = mongoose.model('Tendedero', TendederoSchema)

module.exports = Tendedero
