"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generarNumero = exports.PI = void 0;
//Tambien se puede hacer a traves de los modulos en este archivo tenemos, constantes 
//variables, intrfaces, clases etc
exports.PI = 3.14;
function generarNumero() {
    return Math.floor(Math.random() * 100);
}
exports.generarNumero = generarNumero;
//Si no quieres poner export en todas las funciones etc.. 
//export {PI, Persona, generarNumero}
