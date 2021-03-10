"use strict";
import {dataForm} from '../selectores.js';

export class UI {
    insertPresupuesto(valor) {
        const { inicial, restante } = valor;
        dataForm.total.textContent = inicial;
        dataForm.restante.textContent = restante;
    }
    ;
    printAlert(message, type) {
        const divMessage = document.createElement('div');
        divMessage.classList.add('text-center', 'alert');
        if (type === 'error') {
            divMessage.classList.add('alert-danger');
        }
        else {
            divMessage.classList.add('alert-success');
            dataForm.formulario.reset()
        }
        divMessage.textContent = message;
        document.querySelector('.primario').insertBefore(divMessage, dataForm.formulario);
        setTimeout(() => {
            divMessage.remove();
        }, 3000);
    };

    listGastos(gastos){
        this.removeHTML_listado();
        gastos.map(gasto => {
            const {cantidad, gastos, id} = gasto
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevoGasto.dataset.id = id; // es igual a nuevoGasto.setAttribute('data-id', id);
            nuevoGasto.innerHTML = `${gastos} <span class="badge badge-primary badge-pill">$ ${cantidad}</span>`;
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.textContent = 'Borrar';
            nuevoGasto.appendChild(btnBorrar);
            dataForm.listaGastos.appendChild(nuevoGasto);
        });
    };

    removeHTML_listado(){
        while(dataForm.listaGastos.firstChild){
            dataForm.listaGastos.firstChild.remove();
        };
    };
};
