export class Persona{
    public nombres:string;
    public apellidos:string;
    public identificacion:string;
    public estadoCivil:string;

    //explicita
    //implicita
    constructor(nombresC:string, apellidosC:string,
        identificionC:string, estadoCivilC:string,

    ){
        this.nombres = nombresC;
        this.apellidos = apellidosC;
        this.identificacion = identificionC;
        this.estadoCivil = estadoCivilC;
    }
    public cambiarEstadoCivil(newestadoCivil:string):void{
        this.estadoCivil=newestadoCivil;
    }
}