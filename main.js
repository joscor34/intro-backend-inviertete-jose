'use strict'

//Librerias
const express = require('express')
const colors = require('colors')

//Aplicacion
const app = express()

var port = 8080

app.listen(port, () => {
  console.log(colors.blue("Tu API esta corriendo en: ") + colors.red('http://localhost:8080'))
})