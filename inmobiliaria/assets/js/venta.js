// Página de venta: se muestran TODAS las propiedades del arreglo
const ventaRow = document.querySelector('#venta-propiedades');

let html = '';
for (let propiedad of propiedades_venta) {
  html += crearTarjeta(propiedad);
}
ventaRow.innerHTML = html;
