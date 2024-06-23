const ingresarColor = document.querySelector('#ingresarColor');
const container = document.querySelector('#container');
const colorElegido = document.querySelector('#colorElegido');

const cambiarColor = (color) => {
  container.style.backgroundColor = color
  colorElegido.style.color = color
  colorElegido.innerHTML = color
}

// Establecer como color por defecto el verde
cambiarColor('green');

// Cambiar el color al hacer click en el contenedor
container.addEventListener("click", () => cambiarColor(ingresarColor.value));