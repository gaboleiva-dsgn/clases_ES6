//Importamos Cliente e Impuesto desde su módulo
import Cliente from "./cliente.js";
import Impuesto from "./impuestos.js";

let impuesto = new Impuesto (5000, -222220);
let cliente = new Cliente("Alicita", impuesto);

validacion();

function validacion() {
    if (typeof montoBrutoAnual !== 'number' || montoBrutoAnual < 0) {
        console.log('montoBrutoAnual debe ser un número positivo');
    } else if (typeof deducciones !== 'number' || deducciones < 0) {
            console.log('deducciones debe ser un número positivo');
    }
    else {
        console.log(cliente.calcularImpuestos());
    }
};





