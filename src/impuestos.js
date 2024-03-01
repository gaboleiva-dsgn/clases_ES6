//Clase impuesto
class Impuesto{
    constructor(montoBrutoAnual, deducciones){
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }
    get montoBrutoAnual(){
        return this._montoBrutoAnual;
    }
    set montoBrutoAnual(montoBrutoAnual){
        if (typeof montoBrutoAnual !== 'number' || montoBrutoAnual < 0) {
            console.log('montoBrutoAnual debe ser un número positivo');
        }
        this._montoBrutoAnual = () => {
            return montoBrutoAnual;
        }
    }
    get deducciones(){
        return this._deducciones;
    }
    set deducciones(deducciones){
        if (typeof deducciones !== 'number' || deducciones < 0) {
            console.log('deducciones debe ser un número positivo')
        }
        this._deducciones = () => {
            return deducciones;
        } 
    }
};

export default Impuesto;  