let nombre = "Fernando";

/**
 * Suma de dos numeros
 * @param {number} a
 * @param {number} b
 * @returns {number} La suma de a + b
 */
function sumar(a, b) {
  return a + b;
}

/**
 * @description Crea un producto basado en los datos que coloca el usuario
 * @param {object} datosProducto
 * @param {number} datosProducto.id
 * @param {string} datosProducto.nombre
 * @param {number} datosProducto.precio
 * @returns {object} el producto creado
 */
function crearProducto(datosProducto) {
  return {
    id: 1,
    nombre: datosProducto.nombre,
    precio: datosProducto.precio,
  };
}
