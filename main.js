'use strict'

//Librerias
const express = require('express')
const colors = require('colors')

//Aplicacion
const app = express()

var port = 8080

app.get('/',(req, res) => {
  res.send('Entraste a la ruta: /')
})

app.get('/jose', (req, res) => {
  res.send('Mi nombre es jose')
})


app.listen(port, () => {
  console.log(colors.blue("Tu API esta corriendo en: ") + colors.red('http://localhost:8080'))
})