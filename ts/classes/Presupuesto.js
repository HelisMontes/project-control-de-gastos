"use strict";
export class Presupuesto {
    constructor() {
        this.presupuesto = {
            inicial: 0,
            restante: 0,
        };
        this.gastos = [];
    }
    registrarPresupuesto(valor) {
        return this.presupuesto = {
            inicial: valor,
            restante: valor
        };
    }
}
