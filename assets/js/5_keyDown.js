const inputColorChange = document.querySelector('#inputColorsChange');
const keyContainer = document.querySelector('#key');
const keyContainer2 = document.querySelector('#key2');
var color = '' //Variable global

// Color blanco por defecto de lod divs
keyContainer.style.backgroundColor = 'white';
keyContainer2.style.backgroundColor = 'white';

inputColorChange.addEventListener('keydown', event => {
  switch (event.key) {
    case 'a':
      color = 'pink'
      keyContainer.style.backgroundColor = color;
      break;
    case 's':
      color = 'orange'
      keyContainer.style.backgroundColor = color;
      break;
    case 'd':
      color = 'lightblue'
      keyContainer.style.backgroundColor = color;
      break;
    case 'q':
      color = 'purple'
      keyContainer2.style.backgroundColor = color;
      break;
    case 'w':
      color = 'gray'
      keyContainer2.style.backgroundColor = color;
      break;
    case 'e':
      color = 'brown'
      keyContainer2.style.backgroundColor = color;
      break;
    default:
      break;
  }
});