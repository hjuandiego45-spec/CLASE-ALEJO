type CambioUsuario = {
  tipo: "nombre" | "correo" | "contraseña"
}

function resumirCambios(cambios: CambioUsuario[]): { nombre: number, correo: number, contraseña: number } {

  let resumen = {
    nombre: 0,
    correo: 0,
    contraseña: 0
  }

  cambios.forEach((cambio) => {
    if (cambio.tipo === "nombre") {
      resumen.nombre++
    } else if (cambio.tipo === "correo") {
      resumen.correo++
    } else {
      resumen.contraseña++
    }
  })

  return resumen
}

// Ejemplo
let cambios: CambioUsuario[] = [
  { tipo: "nombre" },
  { tipo: "correo" },
  { tipo: "contraseña" },
  { tipo: "nombre" },
  { tipo: "contraseña" }
]

let resultado = resumirCambios(cambios)
console.log(resultado)