function valores() {
  var params = new URLSearchParams();

  console.log(document.getElementById("product-name").value)
  console.log(document.getElementById('product_price').value)
  console.log(document.getElementById('product_description').value)
  console.log(document.getElementById('product_category').value)

  params.append('name', document.getElementById("product-name").value)
  params.append('price', document.getElementById('product_price').value)
  params.append('description', document.getElementById('product_description').value)
  params.append('category', document.getElementById('product_category').value)

  axios.post("http://localhost:8282/NewProduct", params, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
  .then((response) => {
    console.log(response.data)
  })
  .catch((err) => {
    console.log(err)
  })
}

function obtener_datos() {
  axios.get("http://localhost:8282/MyProducts")
  .then((response) => {
    console.log(response.data.products)
    for(var i = 0; i < response.data.products.length; i ++){
      var fila1 = document.createElement("tr")
      var fila2 = document.createElement("tr")
      var fila3 = document.createElement("tr")
      var fila4 = document.createElement("tr")
      

      var columna1 = document.createElement("td")
      var columna2 = document.createElement("td")
      var columna3 = document.createElement("td")
      var columna4 = document.createElement("td")
      
      var name = document.createTextNode(response.data.products[i].name)
      var price = document.createTextNode(response.data.products[i].price)
      var description = document.createTextNode(response.data.products[i].description)
      var category = document.createTextNode(response.data.products[i].category)
      
      columna1.appendChild(name)
      columna2.appendChild(price)
      columna3.appendChild(description)
      columna4.appendChild(category)

      fila1.appendChild(columna1)
      fila1.appendChild(columna2)
      fila1.appendChild(columna3)
      fila1.appendChild(columna4)
      
      
      var tabla = document.getElementById('cuerpo')
      tabla.appendChild(fila1)
      tabla.appendChild(fila2)
      tabla.appendChild(fila3)
      tabla.appendChild(fila4)
      
      
    }
  })
  .catch((err) => {
    console.log(err)
  })

  
}