type Unidad = "cm" | "m" | "km"

function convertirUnidad(valor: number, origen: Unidad, destino: Unidad): number {

  let metros = 0

  // Convertir a metros
  if (origen === "cm") {
    metros = valor / 100
  } else if (origen === "m") {
    metros = valor
  } else {
    metros = valor * 1000
  }

  // Convertir desde metros al destino
  if (destino === "cm") {
    return metros * 100
  } else if (destino === "m") {
    return metros
  } else {
    return metros / 1000
  }

}

// Ejemplo
let resultado = convertirUnidad(100, "cm", "m")
console.log(resultado)