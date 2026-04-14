interface Calificacion {
  estudianteId: number
  materia: string
  categoria: "tareas" | "quices" | "examen"
  nota: number
}

function calcularPromedioPorCategoria(calificaciones: Calificacion[], estudianteId: number) {

  let filtradas = calificaciones.filter((c) => c.estudianteId === estudianteId)

  let suma = {
    tareas: 0,
    quices: 0,
    examen: 0
  }

  let conteo = {
    tareas: 0,
    quices: 0,
    examen: 0
  }

  filtradas.forEach((c) => {
    suma[c.categoria] += c.nota
    conteo[c.categoria]++
  })

  return {
    tareas: conteo.tareas > 0 ? suma.tareas / conteo.tareas : 0,
    quices: conteo.quices > 0 ? suma.quices / conteo.quices : 0,
    examen: conteo.examen > 0 ? suma.examen / conteo.examen : 0
  }
}

// Ejemplo
let notas: Calificacion[] = [
  { estudianteId: 1, materia: "Matemáticas", categoria: "tareas", nota: 4.0 },
  { estudianteId: 1, materia: "Matemáticas", categoria: "quices", nota: 3.5 },
  { estudianteId: 1, materia: "Matemáticas", categoria: "examen", nota: 4.5 },
  { estudianteId: 1, materia: "Matemáticas", categoria: "tareas", nota: 5.0 }
]

let resultado = calcularPromedioPorCategoria(notas, 1)
console.log(resultado)
