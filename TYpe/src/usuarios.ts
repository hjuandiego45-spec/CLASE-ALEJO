interface Usuario {
  nombre: string
  edad: number
  activo: boolean
  rol: "admin" | "editor" | "visitante"
}

function filtrarUsuarios(usuarios: Usuario[]): Usuario[] {
  return usuarios.filter((u) => u.edad >= 18 && u.activo && u.rol !== "visitante")
}

// Ejemplo
let listaUsuarios: Usuario[] = [
  { nombre: "Juan", edad: 24, activo: true, rol: "admin" },
  { nombre: "Ana", edad: 16, activo: true, rol: "editor" },
  { nombre: "Luis", edad: 30, activo: false, rol: "editor" },
  { nombre: "Sofía", edad: 22, activo: true, rol: "visitante" }
]

let resultado = filtrarUsuarios(listaUsuarios)
console.log(resultado)