import {Presupuesto as presupuesto, presupuesto_type} from '../interfaces/Presupuesto'

export class Presupuesto implements presupuesto{
    
    presupuesto:presupuesto_type;
    gastos:number[];
    
    constructor(){
        this.presupuesto = {
            inicial:0,
            restante:0,
        }
        this.gastos= [];
    }

    public registrarPresupuesto(valor:number):presupuesto_type{
        
        return this.presupuesto = {
            inicial:valor,
            restante: valor
        };
    }
}
