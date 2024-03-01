//Importamos Cliente e Impuesto desde su módulo
import Cliente from "./cliente.js";
import Impuesto from "./impuestos.js";

let impuesto = new Impuesto (5000, 222220);
let cliente = new Cliente("Alicita", impuesto);
console.log(cliente.calcularImpuestos());



