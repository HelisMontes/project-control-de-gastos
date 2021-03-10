import {Presupuesto} from './classes/Presupuesto.js';
import {UI} from './classes/UI.js';
import {dataForm} from './selectores.js';
import {gastos_type} from './interfaces/interface_type';


const classPresupuesto =  new Presupuesto()
const ui =  new UI()

const eventListener = ():void => {
    document.addEventListener('DOMContentLoaded', solicitarPresupuesto);
    document.addEventListener('submit', agregarGastos);
    dataForm.listaGastos.addEventListener('click', eliminarGasto);
}

const solicitarPresupuesto = ():void => {
    const valor:number = Number (prompt('¿Cual es su presupuesto?'))

    if (valor <= 0 || isNaN(valor)) {
        window.location.reload();
    }

    const mostrar:any = classPresupuesto.registrarPresupuesto(valor)
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
    
    const gasto:gastos_type = { gastos, cantidad, id: Date.now() };
    const result = classPresupuesto.addGastos(gasto);
    if(result){
        ui.printAlert('El gasto no pude ser mayor al presupuesto', 'error');
        return;
    };
    ui.printAlert('Datos agregados correctamente!!!');
    const { gastos_array, presupuesto } = classPresupuesto;
    console.log(gastos_array);
    ui.listGastos(gastos_array);
    ui.updatePresupuesto(presupuesto.restante);
    ui.comprobarPresupuesto(presupuesto);
};

const eliminarGasto = e => {
    if(e.target.classList.contains('borrar-gasto')){
     const { id } = e.target.parentElement.dataset;
     classPresupuesto.eliminarGasto(id);
     const { gastos_array, presupuesto } = classPresupuesto;
     ui.listGastos(gastos_array);
     ui.updatePresupuesto(presupuesto.restante);
     ui.comprobarPresupuesto(presupuesto);
    };
};
eventListener();