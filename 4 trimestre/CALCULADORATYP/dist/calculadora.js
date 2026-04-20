"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Calculadora {
    sumar(a, b) {
        return a + b;
    }
    restar(a, b) {
        return a - b;
    }
    multiplicar(a, b) {
        return a * b;
    }
    dividir(a, b) {
        if (b === 0) {
            return "Error: no se puede dividir entre cero";
        }
        return a / b;
    }
    calcular(operacion, a, b) {
        switch (operacion) {
            case "sumar":
                return this.sumar(a, b);
            case "restar":
                return this.restar(a, b);
            case "multiplicar":
                return this.multiplicar(a, b);
            case "dividir":
                return this.dividir(a, b);
            default:
                return "Operación no válida";
        }
    }
}
// ej
const calc = new Calculadora();
console.log(calc.calcular("sumar", 5, 3));
console.log(calc.calcular("restar", 10, 4));
console.log(calc.calcular("multiplicar", 6, 2));
console.log(calc.calcular("dividir", 8, 0));
