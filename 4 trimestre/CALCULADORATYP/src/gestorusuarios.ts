interface Usuario {
    id: number;
    nombre: string;
    correo: string;
    activo: boolean;
}

class UsuarioService {
    usuarios: Usuario[] = [];

    crear(usuario: Usuario): void {
        this.usuarios.push(usuario);
    }

    desactivar(id: number): void {
        for (let usuario of this.usuarios) {
            if (usuario.id === id) {
                usuario.activo = false;
                return;
            }
        }
        console.log("Usuario no encontrado");
    }

    listarActivos(): Usuario[] {
        let activos: Usuario[] = [];

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