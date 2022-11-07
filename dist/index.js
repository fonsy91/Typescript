"use strict";
//TIPOS BASICOS 
let myString = 'Hola Mundo';
let numero = 31;
let boleano = true;
//ARRAYS
let arrayNumeros = [1, 2, 3, 4];
let arrayNumeros2 = [1, 2, 3];
let arrayString = ["Uno", "dos", "tres"];
//Un array de diferentes tipos 
let arrayDifTipos = ["Uno", 2, 3.33, true];
//TUPLA es como una rray pero sabe el tipo que hay y de cuantos elementos consta 
let TuplaPlayer = ["Hola", 8, true];
//TUPLA DE ARRAY
let players;
players = [
    [1, "Alfonso"],
    [2, "Luis"]
];
//Inferencia de variable en typescript cuando a una variable le asignas un valor sin haberle dicho de 
//que tipo es inmediatamente al asignarle cualquier cosa ya se asigna solo sin necesidad de declararlo 
//como hemos hecho al principio 
let miVariable = 33;
//COMPOSICION DE TIPOS 
//Hay dos Unions y generics ahora vermos Unions mas tarde Genercis 
//Con Unions podemos declarar que una variable pueda ser de dos tipos o mas 
let miVariable3;
//Compilacion y ejecucion: tsc y node <nombre del archivo>
//Curso: https://www.youtube.com/watch?v=IJ_mpJRaHmc&ab_channel=DominiCode
//Minuto 1:41:10
