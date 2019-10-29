//Librerias
const express = require('express')
const bodyParser = require('body-parser')

//Aplicacion
const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')

  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-auth-token')

  res.header('Access-Control-Expose-Headers', 'x-auth-token')

  next()
}) 

app.use(bodyParser.urlencoded({
  extended: true
}))


app.get('/',(req, res) => {
  res.send('Entraste a la ruta: /')
})

app.get('/jose', (req, res) => {
  res.send('Mi nombre es jose')
})

app.post('/nombre', (req, res) => {
  var name = req.body.name

  res.send('Hola ' + name + ' un gusto conocerte')
})

module.exports = app
