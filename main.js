'use strict'

//Librerias
const colors = require('colors')
const keys = require('./config')
const app = require('./app')
const mongoose = require('mongoose')

//Aplicacion
var port = keys.PORT

mongoose.connect(keys.db, (err, res) => {
  if(err){
    console.log(`Hubo un error conectandose a la base de datos: ${err}`)
  }
  app.listen(port, () => {
    console.log(colors.blue("Tu API esta corriendo en: ") + colors.red(`http://localhost:${port}`))
  })
})
