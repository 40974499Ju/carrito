//variables//
const carrito = document.getElementById("carrito"),
    listaBiografias = document.getElementById("lista-biografias"),
    contenedorCarrito = document.querySelector('.buy-card .lista_de_biografias');
    vaciarCarritoBtn = document.querySelector('#vaciar_carrito');

registrarEventsListeners()
function registrarEventsListeners() {
    //cuando yo le de click al carrito de compras"//
    listaBiografias.addEventListener('click', agregarBiografia);
}

function agregarBiografia (e) {
    if (e.target.classList.contains("agregar-carrito")){
        const biografiaSeleccionada = e.target.parentElement.parentElement;
        leerInfo (biografiaSeleccionada)
    }
    
}
function leerInfo(biografias) {
    const infoBiografias = {
        imagen : biografias.querySelector('img').src,
        titulo: biografias.querySelector('h3').textContent,
        precio: biografias.querySelector('.descuento').textContent,
        id : biografias.querySelector('button').getAttribute('data-id')
    }

}