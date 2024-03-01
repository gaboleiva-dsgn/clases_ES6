//Clase Cliente
class Cliente{
    constructor(nombre, impuesto){
        this._nombre = nombre;
        this._impuesto = impuesto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
   calcularImpuestos() {
    if (this._impuesto._deducciones > this._impuesto._montoBrutoAnual) {
        console.log("Queda exonerado de Impuestos Anuales");
    }
    else {
        const resultado = (this._impuesto.montoBrutoAnual - this._impuesto.deducciones) * 0.21;
        return (`El impuesto total a pagar por ${this.nombre} es: ${resultado}`);
    }
   }
   
};

export default Cliente;  


// export default class Impuesto {
//     constructor(monto_bruto_anual, deducciones){
//         if (typeof monto_bruto_anual !== 'number' || monto_bruto_anual < 0) {
//             throw new Error('monto_bruto_anual debe ser un número positivo');
//         }
//         if (typeof deducciones !== 'number' || deducciones < 0) {
//             throw new Error('deducciones debe ser un número positivo');
//         }
//         this._monto_bruto_anual = () => {
//             return monto_bruto_anual;
//         }
//         this._deducciones = () => {
//             return deducciones;
//         }
//     }

//     get monto_bruto_anual(){
//         return this._monto_bruto_anual;
//     }
    
//     get deducciones(){
//         return this._deducciones;
//     }

//     set monto_bruto_anual(monto_bruto_anual_nuevo){
//         if (typeof monto_bruto_anual_nuevo !== 'number' || monto_bruto_anual_nuevo < 0) {
//             throw new Error('monto_bruto_anual debe ser un número positivo');
//         }
//         this._monto_bruto_anual= ()=> {
//             return monto_bruto_anual_nuevo;
//         }
//     }

//     set deducciones(deducciones_nuevo){
//         if (typeof deducciones_nuevo !== 'number' || deducciones_nuevo < 0) {
//             throw new Error('deducciones debe ser un número positivo');
//         }
//         this._deducciones= ()=> {
//             return deducciones_nuevo;
//         }
//     }
// }






