const mongoose = require('mongoose')
const connectionURL = 'nuestro url'

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true,     // crear indexes
  useUnifiedTopology: true,
  useFindAndModify: false
})