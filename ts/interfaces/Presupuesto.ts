type presupuesto_type = {
    inicial:number
    restante:number
}

interface Presupuesto{
    presupuesto:presupuesto_type,
    gastos:number[],
    registrarPresupuesto(value:number):presupuesto_type;
}

interface UI{
    insertPresupuesto(value:presupuesto_type[]):void;
    printAlert(message:string, type:string):void;
}
export {Presupuesto, presupuesto_type, UI};