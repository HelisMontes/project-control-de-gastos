import {Presupuesto} from './classes/Presupuesto.js'
import {UI} from './classes/UI.js'
import {dataForm} from './selectores.js'


const presupuesto =  new Presupuesto()
const ui =  new UI()

const eventListener = ():void => {
    document.addEventListener('DOMContentLoaded', solicitarPresupuesto);
    document.addEventListener('submit', agregarGastos);
}

const solicitarPresupuesto = ():void => {
    const valor:number = Number (prompt('¿Cual es su presupuesto?'))

    if (valor <= 0 || isNaN(valor)) {
        window.location.reload();
    }

    const mostrar:any = presupuesto.registrarPresupuesto(valor)
    ui.insertPresupuesto(mostrar);
}

const agregarGastos  = (e) => {
    e.preventDefault();
    const gastos:string = dataForm.gasto.value; 
    const cantidad:number = Number(dataForm.cantidad.value);
    if (gastos === '') {
        ui.printAlert('El campo gasto esta vació', 'error');
        return;
    }else if(cantidad <= 0 || isNaN(cantidad)){
        ui.printAlert('Catidad no válida', 'error')
        return;
    }

    console.log('Agregando.... Gastos')
}



eventListener();