"use strict";
export class Presupuesto {
    constructor() {
        this.presupuesto = {
            inicial: 0,
            restante: 0,
        };
        this.gastos_array = [];
    }
    registrarPresupuesto(valor) {
        return this.presupuesto = {
            inicial: valor,
            restante: valor
        };
    }
    addGastos(gasto) {
        this.gastos_array = [...this.gastos_array, gasto];
        this.calcularRestante();
    }

    calcularRestante(){
        const result =  this.gastos_array.reduce((total, gasto) => total + gasto.cantidad, 0)
        this.presupuesto.restante = this.presupuesto.inicial - result;
    }

}