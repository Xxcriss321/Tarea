"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    //explicita
    //implicita
    function Persona(nombresC, apellidosC, identificionC, estadoCivilC) {
        this.nombres = nombresC;
        this.apellidos = apellidosC;
        this.identificacion = identificionC;
        this.estadoCivil = estadoCivilC;
    }
    Persona.prototype.cambiarEstadoCivil = function (newestadoCivil) {
        this.estadoCivil = newestadoCivil;
    };
    return Persona;
}());
exports.Persona = Persona;
