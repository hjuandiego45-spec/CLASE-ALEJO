function obtenerNumero() {
  return new Promise((mensaje) => {

    setTimeout(() => {
      mensaje(10);
    }, 2000);
  });
}

function multiplicar(numero) {
  return new Promise((mensaje) => {

    setTimeout(() => {
      mensaje(numero * 2);
    }, 2000);

  });
}

obtenerNumero()
  .then((num) => {
    return multiplicar(num);
  })
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.log(error);
  });

  // ¿Qué imprime?
// Imprime undefined.

// ¿Por qué?
// Porque se llamó la función, pero no se retornó el resultado.
// Entonces el siguiente .then() no recibe nada.

// ¿Qué faltó?
// Faltó poner return para enviar el valor al siguiente .then().

// ¿Qué retorna realmente .then()?
// .then() devuelve una promesa nueva.
// Si no retornas nada, devuelve undefined.