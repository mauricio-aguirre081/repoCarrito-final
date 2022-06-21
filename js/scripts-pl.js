

const divProductos = document.getElementById('div__productos');
const carritoDiv = document.getElementById('div__carrito');

const botonVaciarCarrito = document.getElementById('vaciar-carrito');

const precioTotal = document.getElementById('precioTotal');

const contadorCarrito = document.getElementById('contadorCarrito');


botonVaciarCarrito.addEventListener('click', () =>{
  carrito.length = 0;
  actualizarCarrito();
});



let carrito = [];

productos.forEach((producto) => {
  const div = document.createElement('div')
  div.classList.add('flex__item_producto')
  div.innerHTML = `
            <div class="card" style="width: 18rem;">
              <img src="${producto.imagen}" class="card-img-top" alt="${producto.imagen}">
                <div class="card-body">
                  <h5 class="card-title">${producto.nombre}</h5>
                  <p class="card-text">"${producto.info}"</p>
                  <p class="card-text"> Precio: ${producto.precio}</p>
                    <div>
                      <a href="#" class="btn btn-primary boton-carrito" id="agregar${producto.id}">Agregar al Carrito</a>
                    </div>
                </div>
            </div>
  `
  divProductos.appendChild(div)

  const boton = document.getElementById(`agregar${producto.id}`);


  boton.addEventListener('click', () => {
      agregarAlCarrito(producto.id);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'El producto ha sido agregado al carrito',
        showConfirmButton: false,
        timer: 2000
      })
  })
}) 

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('carrito')){
      carrito = JSON.parse(localStorage.getItem('carrito'))
      actualizarCarrito()
  }

})

const agregarAlCarrito = (prodId) => {

      const existe = carrito.some(prod => prod.id === prodId);

        if (existe) {
          const prod = carrito.map (prod => {
            if (prod.id === pordId) {
              prod.cantidad++
            }
          })
        } else {
          const prodAgregado = productos.find((prod) => prod.id === prodId);
          carrito.push(prodAgregado);
          console.log(carrito);
        }
      actualizarCarrito();
  }

  const eliminarDelCarrito = (prodId) => {
    const prodeliminar = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(prodeliminar);
    carrito.splice(indice, 1); 
    actualizarCarrito();
    console.log(carrito)
}


   const actualizarCarrito = () => {

    carritoDiv.innerHTML = "";

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class=" btn btn-danger boton-eliminar">eliminar</button>
        `

        carritoDiv.appendChild(div);
        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
    contadorCarrito.innerText = carrito.length;
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0);
  } 

function searchProduct() {
  //DOM
  const input = document.getElementById('filter').value.toUpperCase();
  console.log(input);

  const cardContainer = document.getElementById('contenedor-productos');
  console.log(cardContainer);

  const cards = cardContainer.getElementsByClassName("card");
  console.log(cards); 

    for (let i = 0; i < cards.length; i++) {
    let title = cards[i].querySelector(".card-body h5.card-title");
    console.log(title);

    if (title.innerText.toUpperCase().indexOf(input) > -1) {
        cards[i].style.display = "";
    } else {
        cards[i].style.display = "none";
    }
    
  } 
}
