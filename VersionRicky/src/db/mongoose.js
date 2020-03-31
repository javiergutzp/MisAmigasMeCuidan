const mongoose = require('mongoose')

// revisa tu connectionURL aqui :-)
var curl = process.env.CURL || require('../config.js').connectionURL

mongoose.connect( curl, {
  useNewUrlParser: true,
  useCreateIndex: true
  //Aqui falta algo de Javi
  //useUnifiedTopology: true,
  //useFindAndModify: false
})
