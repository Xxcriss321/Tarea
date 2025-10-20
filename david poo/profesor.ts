import { Empleado } from "./empleado.js";
export class Profesor extends Empleado {
    public departamento: string;

    constructor(nombres:string, apellidos:string, identificacion:string,
        estadoCivil:string, anioIncorporacion:number, numeroDespacho:number, departamentoC:string,){
        super(nombres,apellidos,identificacion,estadoCivil, anioIncorporacion, numeroDespacho);
        this.departamento = departamentoC;
    }
    public cambioCurso(newcaambiocurso:string):void{
        this.departamento=newcaambiocurso;
}
}