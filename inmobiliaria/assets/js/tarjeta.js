// Esta función recibe UN objeto propiedad y devuelve el template (HTML) de su tarjeta
function crearTarjeta(propiedad) {
  // Condicional para fumar
  let fumar = '';
  if (propiedad.smoke) {
    fumar = `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`;
  } else {
    fumar = `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`;
  }

  // Condicional para mascotas
  let mascotas = '';
  if (propiedad.pets) {
    mascotas = `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`;
  } else {
    mascotas = `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>`;
  }

  const template = `
    <div class="col-md-4 mb-4 d-flex">
      <div class="card w-100">
        <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}" />
        <div class="card-body">
          <h5 class="card-title">${propiedad.nombre}</h5>
          <p class="card-text">${propiedad.descripcion}</p>
          <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
          <p>
            <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
            <i class="fas fa-bath"></i> ${propiedad.banos} Baños
          </p>
          <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
          ${fumar}
          ${mascotas}
        </div>
      </div>
    </div>
  `;
  return template;
}
