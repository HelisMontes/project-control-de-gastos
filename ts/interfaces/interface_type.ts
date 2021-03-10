type presupuesto_type = {
    inicial:number
    restante:number
}
type gastos_type ={
    cantidad:number,
    gastos:string,
    id:number
}
interface Presupuesto{
    presupuesto:presupuesto_type,
    gastos_array:gastos_type[],
    registrarPresupuesto(value:number):presupuesto_type,
    addGastos(gastos:gastos_type):void,
    calcularRestante():void,
}

interface UI{
    insertPresupuesto(value:presupuesto_type):void;
    printAlert(message:string, type?:string):void;
    listGastos(gastos:gastos_type[]):void;
    updatePresupuesto(restante:number);
}
export {Presupuesto, presupuesto_type, UI, gastos_type};