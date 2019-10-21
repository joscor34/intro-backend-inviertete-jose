'use strict'

//Librerias
const express = require('express')

//Aplicacion
const app = express()

var port = 8080

app.listen(port, () => {
  console.log('Felicidades tu aplicacion esta corriendo en: http://localhost:8080')
})