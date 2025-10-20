"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
var persona_js_1 = require("./persona.js");
var Estudiante = /** @class */ (function (_super) {
    __extends(Estudiante, _super);
    function Estudiante(nombres, apellidos, identificacion, estadoCivil, cursoC, matriculaC) {
        var _this = _super.call(this, nombres, apellidos, identificacion, estadoCivil) || this;
        _this.curso = cursoC;
        _this.matricula = matriculaC;
        return _this;
    }
    Estudiante.prototype.nuevaMatricula = function (newnuevaMatricula) {
        this.matricula = newnuevaMatricula;
    };
    return Estudiante;
}(persona_js_1.Persona));
exports.Estudiante = Estudiante;
