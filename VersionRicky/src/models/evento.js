const mongoose = require('mongoose')
const validator = require('validator')

//Limpie el Todo schema y lo converti en el de expense
const EventoSchema = new mongoose.Schema({
  EventoID: {
    type: Number,
    required: true
  },
  Titulo: {
    type: String,
    required: true
  },
  Hora: {
    type: String,
    required: true
  },
  Fecha: {
    type: String,
    default: false
  },
  LugarInicial: {
    type: Number,
    default: false
  },
  LugarFinal: {
    type: Number,
    default: false
  },
  InvolucradasCount: {
    type: Number,
    default: false
  },
  Involucradas: [{
    //Lo hare un Array de Id's de Sororas que van
    type: mongoose.Schema.Types.ObjectId,
    default: false,
    ref:'Sorora'
  }],
  CreadoPor: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Sorora'
  }
})

const Evento = mongoose.model('Evento', EventoSchema)

module.exports = Evento
