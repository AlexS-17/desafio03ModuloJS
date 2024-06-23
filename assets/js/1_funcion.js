// Transforma esta declaración de función a una función de expresión.

/*
function example(a, b, c) {
  return a + b + c;
};
*/

const example = function (a, b, c) {
  return a + b + c;
};

console.log(`Función de expresión:`, example(1, 2, 3));
