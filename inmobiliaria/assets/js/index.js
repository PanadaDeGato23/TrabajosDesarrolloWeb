// Página principal: solo 3 propiedades en venta y 3 en alquiler
const ventaRow = document.querySelector('#venta-propiedades');
const alquilerRow = document.querySelector('#alquiler-propiedades');

// Propiedades en venta (máximo 3)
let htmlVenta = '';
let contadorVenta = 0;
for (let propiedad of propiedades_venta) {
  if (contadorVenta < 3) {
    htmlVenta += crearTarjeta(propiedad);
    contadorVenta = contadorVenta + 1;
  }
}
ventaRow.innerHTML = htmlVenta;

// Propiedades en alquiler (máximo 3)
let htmlAlquiler = '';
let contadorAlquiler = 0;
for (let propiedad of propiedades_alquiler) {
  if (contadorAlquiler < 3) {
    htmlAlquiler += crearTarjeta(propiedad);
    contadorAlquiler = contadorAlquiler + 1;
  }
}
alquilerRow.innerHTML = htmlAlquiler;
