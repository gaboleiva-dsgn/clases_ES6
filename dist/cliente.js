"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
// Se crea la clase Cliente
var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre, impuesto) {
    _classCallCheck(this, Cliente);
    this._nombre = nombre;
    this._impuesto = impuesto;
  }
  _createClass(Cliente, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    },
    set: function set(nombre) {
      this._nombre = nombre;
    }
    // se crea metodo para calcular el impuesto
  }, {
    key: "calcularImpuestos",
    value: function calcularImpuestos() {
      // validación
      if (this._impuesto._deducciones > this._impuesto._montoBrutoAnual) {
        // Si deducción es mayor a montoBrutoAnual Retornamos exonerado de impuesto
        return "Queda exonerado de Impuestos Anuales";
      } else {
        // De lo contrario hacemos el calculo de la resta de montoBrutoAnual menos deducciones, por 0.21
        var resultado = (this._impuesto.montoBrutoAnual - this._impuesto.deducciones) * 0.21;
        // Retornamos el resultado del calculo.
        return "El impuesto total a pagar por ".concat(this.nombre, " es: ").concat(resultado);
      }
    }
  }]);
  return Cliente;
}();
;
// Exportamos la clase Cliente
var _default = Cliente;
exports["default"] = _default;