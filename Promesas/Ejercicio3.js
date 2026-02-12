function obtenerEdad() {
  return new Promise((mensaje) => {

    setTimeout(() => {
      mensaje(18);
    }, 2000);

  });
}

function verificarMayorDeEdad(edad) {
  return new Promise((mensaje, mensaje2) => {

    if (edad >= 18) {
      mensaje("Eres mayor de edad");
    } else {
      mensaje2("Eres menor de edad");
    }

  });
}

obtenerEdad()
  .then((edad) => {
    return verificarMayorDeEdad(edad);
  })
  .then((respuesta) => {
    console.log(respuesta);
  })
  .catch((error) => {
    console.log(error);
  });