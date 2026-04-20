"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsuarioService {
    usuarios = [];
    crear(usuario) {
        this.usuarios.push(usuario);
    }
    desactivar(id) {
        for (let usuario of this.usuarios) {
            if (usuario.id === id) {
                usuario.activo = false;
                return;
            }
        }
        console.log("Usuario no encontrado");
    }
    listarActivos() {
        let activos = [];
        for (let usuario of this.usuarios) {
            if (usuario.activo) {
                activos.push(usuario);
            }
        }
        return activos;
    }
}
// PRUEBA
const service = new UsuarioService();
service.crear({ id: 1, nombre: "Juan", correo: "juan@gmail.com", activo: true });
service.crear({ id: 2, nombre: "Ana", correo: "ana@gmail.com", activo: true });
service.crear({ id: 3, nombre: "Luis", correo: "luis@gmail.com", activo: false });
service.desactivar(1);
console.log(service.listarActivos());
