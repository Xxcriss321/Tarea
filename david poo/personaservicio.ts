import { Empleado } from "./empleado.js";
export class PersonaServicio extends Empleado {
    public seccion : string;

    constructor(nombres:string, apellidos:string, identificacion:string,
        estadoCivil:string, anioIncorporacion:number, numeroDespacho:number, seccionC:string,){
        super(nombres,apellidos,identificacion,estadoCivil, anioIncorporacion, numeroDespacho);
        this.seccion = seccionC;
    }
    public trasladoSeccion(newetrasladoSeccion:string):void{
        this.seccion=newetrasladoSeccion;
}
}