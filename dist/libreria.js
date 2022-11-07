"use strict";
//Archivo que contendra funciones y metodos 
//similar al .h de lenguaje C 
var Utility;
(function (Utility) {
    let Taxes;
    (function (Taxes) {
        function calculaIva(precio) {
            return (precio * 0.21) + precio;
        }
        Taxes.calculaIva = calculaIva;
        function calculaPenalizacion(precio) {
            return (precio * 0.30) + precio;
        }
        Taxes.calculaPenalizacion = calculaPenalizacion;
    })(Taxes = Utility.Taxes || (Utility.Taxes = {}));
})(Utility || (Utility = {}));
