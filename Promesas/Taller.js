function saludar(nombre) {
  return new Promise((mensaje, mensaje2) => {

    setTimeout(() => {

      if (nombre === "JUAN") {
        mensaje("Hola JUAN, bienvenido");
      } else {
        mensaje2("No te conozco");
      }

    }, 2000);

  });
}

saludar("JUAN")
  .then((respuesta) => {
    console.log(respuesta);
  })
  .catch((error) => {
    console.log(error);
  });