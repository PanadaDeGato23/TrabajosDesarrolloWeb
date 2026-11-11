// Reemplaza esta dirección por la URL de TU backend publicado en Render.
const URL_API = "http://localhost:3000/api/producto";
// const URL_API = "https://REEMPLAZAR-POR-TU-BACKEND.onrender.com/api/productos";
// const URL_API = "http://localhost:3000/api/productos";

const tablaProductos = document.getElementById("tablaProductos");
const mensaje = document.getElementById("mensaje");
const buscarNombre = document.getElementById("buscarNombre");
const filtroCategoria = document.getElementById("filtroCategoria");
const limpiarFiltros = document.getElementById("limpiarFiltros");

let productos = [];

// Consulta el backend. El backend obtiene los datos desde PostgreSQL.
async function cargarProductos() {
  try {
    mensaje.textContent = "Cargando productos...";
    const respuesta = await fetch(URL_API);

    if (!respuesta.ok) {
      throw new Error("El servidor respondió con estado " + respuesta.status);
    }

    productos = await respuesta.json();
    cargarCategorias();
    mostrarProductos(productos);
    mensaje.textContent = "Se encontraron " + productos.length + " productos.";
  } catch (error) {
    console.error("Error al cargar productos:", error);
    mensaje.textContent = "No fue posible cargar los datos. Revisa la URL del backend y que el servidor esté disponible.";
  }
}

// Crea las opciones del filtro a partir de las categorías recibidas.
function cargarCategorias() {
  const categorias = [];

  for (const producto of productos) {
    if (!categorias.includes(producto.categoria)) {
      categorias.push(producto.categoria);
    }
  }

  categorias.sort();

  filtroCategoria.innerHTML = '<option value="">Todas las categorías</option>';
  for (const categoria of categorias) {
    const opcion = document.createElement("option");
    opcion.value = categoria;
    opcion.textContent = categoria;
    filtroCategoria.appendChild(opcion);
  }
}

// Construye las filas de la tabla usando los datos recibidos.
function mostrarProductos(lista) {
  tablaProductos.innerHTML = "";

  if (lista.length === 0) {
    tablaProductos.innerHTML = '<tr><td colspan="4">No hay resultados.</td></tr>';
    return;
  }

  for (const producto of lista) {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${producto.nombre}</td>
      <td>${producto.descripcion ?? ""}</td>
      <td>${producto.categoria}</td>
      <td>$${Number(producto.precio).toLocaleString("es-CL")}</td>
    `;
    tablaProductos.appendChild(fila);
  }
}

// Aplica ambos filtros sobre el arreglo que ya está en memoria.
function filtrarProductos() {
  const texto = buscarNombre.value.toLowerCase().trim();
  const categoria = filtroCategoria.value;

  const resultado = productos.filter(producto => {
    const coincideNombre = producto.nombre.toLowerCase().includes(texto);
    const coincideCategoria = categoria === "" || producto.categoria === categoria;
    return coincideNombre && coincideCategoria;
  });

  mostrarProductos(resultado);
  mensaje.textContent = "Resultados: " + resultado.length;
}

buscarNombre.addEventListener("input", filtrarProductos);
filtroCategoria.addEventListener("change", filtrarProductos);
limpiarFiltros.addEventListener("click", () => {
  buscarNombre.value = "";
  filtroCategoria.value = "";
  mostrarProductos(productos);
  mensaje.textContent = "Se muestran " + productos.length + " productos.";
});

cargarProductos();
