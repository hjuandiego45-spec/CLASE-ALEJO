class producto {
     id: number;
     nombre: string;
     precio: number;
     stock: number;

     constructor(id:number, nombre:string, precio:number, stock:number) {
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
        this.stock=stock;

     }
}
class Inventario {
    productos: producto[] = [];

    agregarProducto(producto: producto): void {
        this.productos.push(producto);
    }

    buscarPorNombre(nombre: string): producto[] {
        return this.productos.filter(p => 
            p.nombre.toLowerCase().includes(nombre.toLowerCase())
        );
    }

    listarProductos(): void {
        console.log(this.productos);
    }

    calcularValorTotal(): number {
        let total = 0;

        for (let p of this.productos) {
            total += p.precio * p.stock;
        }

        return total;
    }
}
// PRUEBA
const inventario = new Inventario();

inventario.agregarProducto(new producto(1, "Arroz", 3000, 10));
inventario.agregarProducto(new producto(2, "Leche", 2500, 5));
inventario.agregarProducto(new producto(3, "Pan", 500, 20));

// LISTAR
inventario.listarProductos();
    
// BUSCAR
console.log(inventario.buscarPorNombre("leche"));

// VALOR TOTAL
console.log("Valor total:", inventario.calcularValorTotal());