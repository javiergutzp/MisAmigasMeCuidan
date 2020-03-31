const mongoose = require('mongoose')
const validator = require('validator')

//Limpie el Todo schema y lo converti en el de expense
const AtendidoPorSchema = new mongoose.Schema({
  
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Sorora'
  },
  atendidoPor: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Sorora'
  },
  Registro: {
    type: String,
    required: true
  }
})

const AtendidoPor = mongoose.model('AtendidoPor', AtendidoPorSchema)

module.exports = AtendidoPor
