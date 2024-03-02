"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));
var _impuestos = _interopRequireDefault(require("./impuestos.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//Importamos Cliente e Impuesto desde su módulo

var impuesto;
var cliente;
// Creamos variables para testear programa
// caso uno : debe pasar las validaciones
var num1 = 50000;
var num2 = 222;
// caso dos : no debería pasar por numero negativo MontoBrutoAnual
var num3 = -50000;
var num4 = 200;
// caso tres : no debería pasar por numero negativo deducción
var num5 = 50000;
var num6 = -200;
// caso cuatro : Debería quedar exonerado del impuesto
var num7 = 50000;
var num8 = 55000;
// Creamos funcion para validar cada caso
function validacion(montoBrutoAnual, deducciones) {
  if (typeof montoBrutoAnual !== "number" || montoBrutoAnual < 0) {
    // Si no pasa validación por montoBrutoAnual entra aquí
    console.log("montoBrutoAnual debe ser un número positivo");
  } else if (typeof deducciones !== "number" || deducciones < 0) {
    // Si no pasa validación por deducción entra acá
    console.log("deducciones debe ser un número positivo");
  } else {
    // Si pasa las validaciones con exito entramos aquí
    impuesto = new _impuestos["default"](montoBrutoAnual, deducciones);
    cliente = new _cliente["default"]("Alicita", impuesto);
    console.log(cliente.calcularImpuestos());
  }
}
// Casos de validaciones
validacion(num1, num2);
validacion(num3, num4);
validacion(num5, num6);
validacion(num7, num8);