import {Presupuesto as presupuesto, presupuesto_type, gastos_type} from '../interfaces/interface_type'

export class Presupuesto implements presupuesto{
    
    presupuesto:presupuesto_type;
    gastos_array:gastos_type[];
    
    constructor(){
        this.presupuesto = {
            inicial:0,
            restante:0,
        }
        this.gastos_array = [];
    }

    public registrarPresupuesto(valor:number):presupuesto_type{
        return this.presupuesto = {
            inicial:valor,
            restante: valor
        };
    }

    addGastos(gasto):boolean{
        this.calcularRestante();
        if(gasto.cantidad > this.presupuesto.restante){
            return true
        }else{
            this.gastos_array = [...this.gastos_array, gasto];
            this.calcularRestante();
        }
    }

    public calcularRestante(){
        const result:number =  this.gastos_array.reduce((total, gasto) => total + gasto.cantidad, 0)
        this.presupuesto.restante = this.presupuesto.inicial - result;
    }
}
