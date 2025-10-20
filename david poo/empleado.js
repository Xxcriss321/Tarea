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
exports.Empleado = void 0;
var persona_js_1 = require("./persona.js");
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombres, apellidos, identificacion, estadoCivil, anioIncorporacionC, numeroDespachoC) {
        var _this = _super.call(this, nombres, apellidos, identificacion, estadoCivil) || this;
        _this.anioIncorporacion = anioIncorporacionC;
        _this.numeroDespacho = numeroDespachoC;
        return _this;
    }
    Empleado.prototype.despacho = function (newedespacho) {
        this.numeroDespacho = newedespacho;
    };
    return Empleado;
}(persona_js_1.Persona));
exports.Empleado = Empleado;
