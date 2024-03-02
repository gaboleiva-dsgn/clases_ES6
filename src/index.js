//Importamos Cliente e Impuesto desde su módulo
import Cliente from "./cliente.js";
import Impuesto from "./impuestos.js";

let impuesto;
let cliente;
// Creamos variables para testear programa
// caso uno : debe pasar las validaciones
let num1 = 50000;
let num2 = 222;
// caso dos : no debería pasar por numero negativo MontoBrutoAnual
let num3 = -50000;
let num4 = 200;
// caso tres : no debería pasar por numero negativo deducción
let num5 = 50000;
let num6 = -200;
// caso cuatro : Debería quedar exonerado del impuesto
let num7 = 50000;
let num8 = 55000;
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
    impuesto = new Impuesto(montoBrutoAnual, deducciones)
    cliente = new Cliente("Alicita", impuesto);
    console.log(cliente.calcularImpuestos());
  }
}
// Casos de validaciones
validacion(num1, num2);
validacion(num3, num4);
validacion(num5, num6);
validacion(num7, num8);
