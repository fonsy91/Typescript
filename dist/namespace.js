"use strict";
//Llamamos a las funciones que estan alojadas en el 
//archivo libreria
Object.defineProperty(exports, "__esModule", { value: true });
//Desde aqui hacemos referencia al archivo libreria.ts
/// <reference path="libreria.ts" />
let utils = Utility.Taxes;
console.log(utils.calculaIva(100));
console.log(utils.calculaPenalizacion(200));
//La otra manera de llamar a funciones y intrfaces etc es a traves de los 
//modulos en este caso llamamos a dichoas funciones y constantes de la 
//libreria libreria2.ts
const libreria2_1 = require("./libreria2");
//Puedes cambiar el nombre de una importacion 
//import {PI as myPi} from "./libreria2";
const Usuario = {
    nombre: "Alfonso",
    telefono: 915215067
};
console.log(`Nombre: ${Usuario.nombre}, Telefono: ${Usuario.telefono}`);
console.log((0, libreria2_1.generarNumero)());
