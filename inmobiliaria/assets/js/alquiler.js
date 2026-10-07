// Página de alquiler: se muestran TODAS las propiedades del arreglo
const alquilerRow = document.querySelector('#alquiler-propiedades');

let html = '';
for (let propiedad of propiedades_alquiler) {
  html += crearTarjeta(propiedad);
}
alquilerRow.innerHTML = html;
