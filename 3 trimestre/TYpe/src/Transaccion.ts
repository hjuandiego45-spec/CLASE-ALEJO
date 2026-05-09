type Transaccion = {
  monto: number
  tipo: "ingreso" | "egreso"
  categoria: string
}

function agruparTransacciones(transacciones: Transaccion[]): { ingreso: number, egreso: number } {

  let resultado = {
    ingreso: 0,
    egreso: 0
  }

  transacciones.forEach((t) => {
    if (t.tipo === "ingreso") {
      resultado.ingreso += t.monto
    } else {
      resultado.egreso += t.monto
    }
  })

  return resultado
}