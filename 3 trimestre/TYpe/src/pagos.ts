type PagoTarjeta = {
  metodo: "tarjeta"
  numeroTarjeta: string
  cvv: string
}

type PagoTransferencia = {
  metodo: "transferencia"
  banco: string
  numeroCuenta: string
}

type PagoEfectivo = {
  metodo: "efectivo"
}

type Pago = PagoTarjeta | PagoTransferencia | PagoEfectivo

function validarPago(pago: Pago): boolean {

  if (pago.metodo === "tarjeta") {
    return pago.numeroTarjeta !== "" && pago.cvv !== ""

  } else if (pago.metodo === "transferencia") {
    return pago.banco !== "" && pago.numeroCuenta !== ""

  } else {
    return true
  }

}

// Ejemplo
let pago1: Pago = {
  metodo: "tarjeta",
  numeroTarjeta: "123456789",
  cvv: "123"
}

let resultado = validarPago(pago1)
console.log(resultado)