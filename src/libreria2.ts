//Tambien se puede hacer a traves de los modulos en este archivo tenemos, constantes 
//variables, intrfaces, clases etc
export const PI = 3.14;

export interface Persona{
    nombre: string;
    telefono: number;
}

export function generarNumero(): number{
    return Math.floor(Math.random()*100);
}

//Si no quieres poner export en todas las funciones etc.. 
//export {PI, Persona, generarNumero}