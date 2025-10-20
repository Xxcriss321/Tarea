import { Persona } from "./persona.js";
export class Empleado extends Persona {
    public anioIncorporacion: number;
    public numeroDespacho: number;

    constructor(nombres:string, apellidos:string, identificacion:string,
        estadoCivil:string, anioIncorporacionC:number, numeroDespachoC:number){
        super(nombres,apellidos,identificacion,estadoCivil);
        this.anioIncorporacion = anioIncorporacionC;
        this.numeroDespacho = numeroDespachoC;
    }
    public despacho(newedespacho:number):void{
        this.numeroDespacho=newedespacho;

}
}