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
exports.PersonaServicio = void 0;
var empleado_js_1 = require("./empleado.js");
var PersonaServicio = /** @class */ (function (_super) {
    __extends(PersonaServicio, _super);
    function PersonaServicio(nombres, apellidos, identificacion, estadoCivil, anioIncorporacion, numeroDespacho, seccionC) {
        var _this = _super.call(this, nombres, apellidos, identificacion, estadoCivil, anioIncorporacion, numeroDespacho) || this;
        _this.seccion = seccionC;
        return _this;
    }
    PersonaServicio.prototype.trasladoSeccion = function (newetrasladoSeccion) {
        this.seccion = newetrasladoSeccion;
    };
    return PersonaServicio;
}(empleado_js_1.Empleado));
exports.PersonaServicio = PersonaServicio;
