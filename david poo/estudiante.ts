import { Persona } from "./persona.js";
export class Estudiante extends Persona {
    public curso: string;
    public matricula: string;

    constructor(nombres:string, apellidos:string, identificacion:string,
        estadoCivil:string, cursoC:string, matriculaC:string){
        super(nombres,apellidos,identificacion,estadoCivil);
        this.curso = cursoC;
        this.matricula = matriculaC;
        }
        public nuevaMatricula(newnuevaMatricula:string):void{
        this.matricula=newnuevaMatricula;
}
}