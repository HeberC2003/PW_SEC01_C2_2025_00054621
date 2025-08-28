// Referencias
const contenido        = document.getElementById('contenidoLibro');   // <div id="contenidoLibro" class="grid-3">
const btnToggleLayout  = document.getElementById('btnToggleLayout');
const btnChangeTitle   = document.getElementById('btnChangeTitle');
const btnRecolor       = document.getElementById('btnRecolor');
const btnAddImage      = document.getElementById('btnAddImage');

const pageTitle        = document.getElementById('pageTitle');        // <h1 id="pageTitle">
const subDescripcion   = document.getElementById('subDescripcion');   // <h2 id="subDescripcion">
const textoDescripcion = document.getElementById('textoDescripcion'); // <p id="textoDescripcion">
const zonaImagen       = document.getElementById('zonaImagen');       // <div id="zonaImagen">

// 1) Alternar columnas <-> filas en "Contenido del libro"
btnToggleLayout.addEventListener('click', () => {
  contenido.classList.toggle('stacked');
  const enFilas = contenido.classList.contains('stacked');
  btnToggleLayout.textContent = enFilas
    ? 'Volver a columnas (Contenido del libro)'
    : 'Alternar columnas/filas (Contenido del libro)';
});

// 2) Cambiar el título de la página (H1 y <title>)
btnChangeTitle.addEventListener('click', () => {
  const actual = pageTitle.textContent.trim();
  const nuevo  = prompt('Nuevo título para la página:', actual);
  if (!nuevo) return;
  const limpio = nuevo.trim();
  if (limpio) {
    pageTitle.textContent = limpio;
    document.title = limpio;
  }
});

// 3) Cambiar color del subtítulo y del texto (toggle de clases)
btnRecolor.addEventListener('click', () => {
  subDescripcion.classList.toggle('alt-subtitle');
  textoDescripcion.classList.toggle('alt-text');
});

// 4) Agregar una imagen debajo de “Datos del libro” (URL)
btnAddImage.addEventListener('click', () => {
  const url = prompt('Pega la URL de una imagen:', 'https://picsum.photos/600/350');
  if (!url) return;

  let img = zonaImagen.querySelector('img');
  if (!img) {
    img = document.createElement('img');
    img.alt = 'Portada o imagen del libro';
    zonaImagen.appendChild(img);
  }
  img.src = url.trim();
});
