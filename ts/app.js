"use strict";
import {Presupuesto} from './classes/Presupuesto.js'
import {UI} from './classes/UI.js'
import {dataForm} from './selectores.js'


const presupuesto =  new Presupuesto()
const ui =  new UI()
const eventListener = () => {
    document.addEventListener('DOMContentLoaded', solicitarPresupuesto);
    document.addEventListener('submit', agregarGastos);
};
const solicitarPresupuesto = () => {
    const valor = Number(prompt('¿Cual es su presupuesto?'));
    if (valor <= 0 || isNaN(valor)) {
        window.location.reload();
    }
    const mostrar = presupuesto.registrarPresupuesto(valor);
    ui.insertPresupuesto(mostrar);
};
const agregarGastos = (e) => {
    e.preventDefault();
    const gastos = dataForm.gasto.value;
    const cantidad = Number(dataForm.cantidad.value);
    if (gastos === '') {
        ui.printAlert('El campo gasto esta vació', 'error');
        return;
    }
    else if (cantidad <= 0 || isNaN(cantidad)) {
        ui.printAlert('Catidad no válida', 'error');
        return;
    }
    const gasto = { gastos, cantidad, id: Date.now() };
    presupuesto.addGastos(gasto);
    ui.printAlert('Datos agregados correctamente!!!');
    const { gastos_array } = presupuesto
    console.log(presupuesto)
    ui.listGastos(gastos_array);
};
eventListener();
