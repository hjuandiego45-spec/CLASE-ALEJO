interface Producto {
  id: number
  nombre: string
  cantidad: number
  categoria: "alimentos" | "tecnología" | "papelería"
}

function tieneBajoStock(producto: Producto): boolean {

  if (producto.categoria === "alimentos") {
    return producto.cantidad < 20

  } else if (producto.categoria === "tecnología") {
    return producto.cantidad < 5

  } else {
    return producto.cantidad < 50
  }

}

// Ejemplo
let producto1: Producto = {
  id: 1,
  nombre: "Arroz",
  cantidad: 10,
  categoria: "alimentos"
}

let resultado = tieneBajoStock(producto1)
console.log(resultado)
