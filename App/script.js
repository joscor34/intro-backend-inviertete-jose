function obtenerProductos() {
  axios.get('http://localhost:8282/MyProducts')
  .then((response) => {
    console.log(response)
  })
  .catch((err) => {
    console.log(err)
  })
}

function agregarProducto() {
  var params = new URLSearchParams()

  params.append("name", "Asus VivoBook")
  params.append("price", 25000)
  params.append("description", "Buena computadora")
  params.append("category", "computers")

  axios.post('http://localhost:8282/NewProduct', params, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
}