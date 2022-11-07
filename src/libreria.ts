//Archivo que contendra funciones y metodos 
//similar al .h de lenguaje C 

namespace Utility{
    export namespace Taxes{
        export function calculaIva(precio: number): number{
            return (precio*0.21) + precio;
        }

        export function calculaPenalizacion(precio: number): number{
            return (precio * 0.30) + precio;
        }
    }
}

