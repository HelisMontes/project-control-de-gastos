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
    }
}