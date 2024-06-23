const container = document.querySelector('#containerColors');
let elements = container.querySelectorAll('div');

elements.forEach(element => element.addEventListener('click', () => element.style.backgroundColor = 'black'));
