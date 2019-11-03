//Librerias
const express = require('express')
const bodyParser = require('body-parser')
const Product = require('./models/product')

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

app.post('/NewProduct', (req, res) =>{
  var product = new Product

  product.name = req.body.name
  product.price = req.body.price
  product.description = req.body.description
  product.category = req.body.category

  product.save((err, productStored) => {
    if(err){
      res.send(`Ocurrio un error guardando el producto: ${err}`)
    }
    res.send({product: productStored})
  })
})

module.exports = app
