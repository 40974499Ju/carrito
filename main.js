const carrito = document.getElementById("carrito"),
    listaBiografia = document.getElementById("lista-biografia"),
    contenedorCarrito = document.querySelector('.buy-card .lista_de_biografia'),
    vaciarCarritoBtn = document.querySelector('#vaciar_carrito');

registrarEventListeners();

function registrarEventListeners() {
    // Cuando yo le de click al carrito de compras
    listaBiografia.addEventListener('click', agregarBiografia);
}

function agregarBiografia(e) {
    if (e.target.classList.contains("agregar-biografia")) {
        const biografiaSeleccionada = e.target.parentElement.parentElement;
        leerInfo(biografiaSeleccionada);
    }
}

function leerInfo(biografia) {
    const infoBiografia = {
        imagen: biografia.querySelector('img').src,
        titulo: biografia.querySelector('h3').textContent,
        precio: biografia.querySelector('.descuento').textContent,
        id: biografia.querySelector('button').getAttribute('data-id'),
        cantidad: 1
    }
    console.log(infoBiografia);
}
