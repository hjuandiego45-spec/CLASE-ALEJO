import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  valorPantalla = '0';
  private primerValor: number | null = null;
  private operador: string | null = null;
  private esperandoSegundoValor = false;

  procesar(valor: string): void {
    if (this.esNumero(valor)) {
      this.agregarNumero(valor);
      return;
    }

    switch (valor) {
      case '.':
        this.agregarDecimal();
        break;
      case 'AC':
        this.limpiar();
        break;
      case '⌫':
        this.borrar();
        break;
      case '+/−':
        this.cambiarSigno();
        break;
      case '%':
        this.porcentaje();
        break;
      case '+':
      case '−':
      case '×':
      case '÷':
        this.elegirOperador(valor);
        break;
      case '=':
        this.calcular();
        break;
    }
  }

  private esNumero(valor: string): boolean {
    return /^[0-9]$/.test(valor);
  }

  private agregarNumero(numero: string): void {
    if (this.esperandoSegundoValor) {
      this.valorPantalla = numero;
      this.esperandoSegundoValor = false;
      return;
    }

    this.valorPantalla = this.valorPantalla === '0' ? numero : this.valorPantalla + numero;
  }

  private agregarDecimal(): void {
    if (this.esperandoSegundoValor) {
      this.valorPantalla = '0.';
      this.esperandoSegundoValor = false;
      return;
    }

    if (!this.valorPantalla.includes('.')) {
      this.valorPantalla += '.';
    }
  }

  private limpiar(): void {
    this.valorPantalla = '0';
    this.primerValor = null;
    this.operador = null;
    this.esperandoSegundoValor = false;
  }

  private borrar(): void {
    if (this.valorPantalla.length <= 1 || this.valorPantalla === 'Error') {
      this.valorPantalla = '0';
      return;
    }

    this.valorPantalla = this.valorPantalla.slice(0, -1);
  }

  private cambiarSigno(): void {
    if (this.valorPantalla !== '0' && this.valorPantalla !== 'Error') {
      this.valorPantalla = String(parseFloat(this.valorPantalla) * -1);
    }
  }

  private porcentaje(): void {
    if (this.valorPantalla !== 'Error') {
      this.valorPantalla = this.formatearResultado(parseFloat(this.valorPantalla) / 100);
    }
  }

  private elegirOperador(nuevoOperador: string): void {
    const valorActual = parseFloat(this.valorPantalla);

    if (this.operador && !this.esperandoSegundoValor) {
      this.calcular();
    } else {
      this.primerValor = valorActual;
    }

    this.operador = nuevoOperador;
    this.esperandoSegundoValor = true;
  }

  private calcular(): void {
    if (this.primerValor === null || this.operador === null) {
      return;
    }

    const segundoValor = parseFloat(this.valorPantalla);
    let resultado = 0;

    switch (this.operador) {
      case '+':
        resultado = this.primerValor + segundoValor;
        break;
      case '−':
        resultado = this.primerValor - segundoValor;
        break;
      case '×':
        resultado = this.primerValor * segundoValor;
        break;
      case '÷':
        if (segundoValor === 0) {
          this.valorPantalla = 'Error';
          this.primerValor = null;
          this.operador = null;
          this.esperandoSegundoValor = true;
          return;
        }
        resultado = this.primerValor / segundoValor;
        break;
    }

    this.valorPantalla = this.formatearResultado(resultado);
    this.primerValor = resultado;
    this.operador = null;
    this.esperandoSegundoValor = true;
  }

  private formatearResultado(resultado: number): string {
    return Number.isInteger(resultado) ? String(resultado) : String(parseFloat(resultado.toFixed(8)));
  }
}
