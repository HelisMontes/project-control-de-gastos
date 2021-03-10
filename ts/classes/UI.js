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
        }
        divMessage.textContent = message;
        document.querySelector('.primario').insertBefore(divMessage, dataForm.formulario);
        setTimeout(() => {
            divMessage.remove();
        },3000);
    }
    ;
};
