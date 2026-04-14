interface CampoFormulario {
  nombre: string
  tipo: "texto" | "numero" | "email"
  valor: string | number
}

function validarCampos(campos: CampoFormulario[]): string[] {
  let invalidos: string[] = []

  campos.forEach((campo) => {
    if (campo.tipo === "texto" && typeof campo.valor !== "string") {
      invalidos.push(campo.nombre)
    } else if (campo.tipo === "numero" && typeof campo.valor !== "number") {
      invalidos.push(campo.nombre)
    } else if (campo.tipo === "email") {
      if (typeof campo.valor !== "string" || !campo.valor.includes("@")) {
        invalidos.push(campo.nombre)
      }
    }
  })

  return invalidos
}

// Ejemplo de uso
let campos: CampoFormulario[] = [
  { nombre: "nombre", tipo: "texto", valor: "Juan" },
  { nombre: "edad", tipo: "numero", valor: 24 },
  { nombre: "correo", tipo: "email", valor: "juan@gmail.com" },
  { nombre: "correo2", tipo: "email", valor: "juangmail.com" }
]

let resultado = validarCampos(campos)
console.log(resultado)