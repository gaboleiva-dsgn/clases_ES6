// Se crea la clase Cliente
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
    // se crea metodo para calcular el impuesto
   calcularImpuestos() {
    // validación
    if (this._impuesto._deducciones > this._impuesto._montoBrutoAnual) {
        // Si deducción es mayor a montoBrutoAnual Retornamos exonerado de impuesto
        return("Queda exonerado de Impuestos Anuales");
    }
    else {
        // De lo contrario hacemos el calculo de la resta de montoBrutoAnual menos deducciones, por 0.21
        const resultado = (this._impuesto.montoBrutoAnual - this._impuesto.deducciones) * 0.21;
        // Retornamos el resultado del calculo.
        return (`El impuesto total a pagar por ${this.nombre} es: ${resultado}`);
    }
   }
   
};
// Exportamos la clase Cliente
export default Cliente;  