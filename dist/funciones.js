"use strict";
//Funciones 
function muestra(name) {
    console.log(`Hola., ${name.toUpperCase()} !!`);
}
function muestra2() {
    console.log("Hola Alfonso");
}
//En esta funcion typscript sabe que valor vas a devolver
function getNumber() {
    return Math.floor(Math.random() * 100);
}
//En otro casos hay que decir explicitamente que valor devolver 
function getNumber2() {
    return Math.floor(Math.random() * 100);
}
//Otra forma de pasar parametros en este caso estamos pasando un objeto a la funcion
function PintarPosicion(posicion) {
    console.log(`La latitud y longitud son: LAT ${posicion.lat} LONG ${posicion.long}`);
}
//Tambien puedes inicializar una variable dentro de los parentesis de una funcion 
function muestra3(nombre = 'Alfonso') {
    console.log(nombre);
}
//Funciones de tipo flecha: ( param1, param2, ...rest ) => { expression; }
//Las funciones anteriores son funciones tradicionales tambien existe una funcion que 
//devuelve un valor inmediatamente a una variable como la siguiente: 
let valorDevuelto = function (nombre) {
    return nombre.toUpperCase();
};
//Esto mismo en una funcion de felcha seria: 
const valorDevuelto2 = (nombre) => nombre.toUpperCase();
//Funcion flecha que sume dos numero 
const sumar = (a, b) => a + b;
//Una funcion tradicional te da problemas y lo solucionamos con una funcion de flecha 
//Objeto de tipo Hulk
const hulk = {
    nombre: 'Hulk',
    //metodo de objeto
    aplastar() {
        //Permite ejecutar una funcion en determinado tiempo
        //Esto da un error de undefined en el this 
        //setTimeout(function(){
        //    console.log(`${this.nombre} aplasta!!`);
        //}, 1000);
        setTimeout(() => {
            console.log(`${this.nombre} aplasta!!`);
        }, 1000);
        //Las funciones de flecha no modifican a lo que apunta this y las tradicionales si
        //this hace referencia a la instancia del objeto 
    }
};
//Llamamos al metod del objeto
hulk.aplastar();
//MAIN ****
//Llamamos a la funcion 
muestra("Alfonso");
muestra2();
console.log(getNumber());
console.log(getNumber2());
PintarPosicion({ lat: 3, long: 55 });
muestra3();
