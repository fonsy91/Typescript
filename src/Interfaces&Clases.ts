/*
INTERFACES VS CLASES 

La diferencia es que las intrefaces solo existen en tiempo de compilacion 
cuando nuestro codigo es transpilado a javascript las interfaces no existen 
solo se usan para verificacion de tipos.

Sin embargo las clases existen en tiempo de compilacion y tiempo de ejecucion 
con una clase podemos inicializar propiedades e implemnetar metodos, crear instancias 
de dicha clase con new.

Los mas recomendable es empezar a trabajar con una interface y si vemos que necesitamos 
inicializar una propiedad pues en ese caso pasamos a clase. En resumen las interfaces solo 
estran disponibles para saegurarnos de que estamos trabajando con los tipos correctos 
en tiempo de desarrollo 
*/

//INTERFACES ---------------------------------------------------------------------------------
/*
Define la "forma" de la data, una especie de molde, En TypeScript, una interfaz solo contiene la 
definición de métodos y propiedades, no su implementación 
*/

interface Book {
    id: number;
    titulo: string;
    autor: string;
    //La ? indica que esta propiedad sera opcional
    coAutor?: string;
    //Metodo 
    isLoan?: (id: number) => void
}

//Hacemos una intrfaz de tipo Book
const book: Book = {
    id: 1,
    titulo: 'Juego de Tronos',
    autor: 'Alfonso'
};

//Un array de Books 
const books: Book[] = [];
//Funcion que devuelve un libro
function getBook(): Book{
    return {id:5, titulo:'Frodo',autor:'Alfonso'};
}
//Funcion que crea un Book
function creaBook(book: Book): Book{
    return book;
}

//MAS SOBRE INTERFACES -----------
//Interface persona
interface Persona{
    id: number;
    nombre: string;
}
//Interfaz empleado
interface Empleado extends Persona{
    departamento: string;
}

//Interfaz cliente 
interface Cliente extends Persona{
    ciudad: string;
}

//Hasta aqui todo bien pero se puede extender una interface de otra asi haces
//que sea mas optimo, en este caso se prepite en cada interface las claves id y nombre 
//para ello eliminamos id y nombre de Empleado y cliente  y agregamos la palabra extends 
//con esto las interfaces Empleado y Cliente tendran sus propios atributos y ademas de la 
//interfaz que extiende en este caso de persona. 
//Al igual que en java una clase puede implementar una interfaz y esta obligado a definir 
//las variables y metodos que hay en la interfaz.

//CLASES ---------------------------------------------------------------------------------

//Los atributos como en java pueden ser public, private o protected 

class EmpleadoTienda{
    //Atributos
    //readonly se usa solo para leer
    private readonly id: number;
    private nombre: string;
    private departamento: string;

    //Constructor   
    constructor(id: number, nombre: string, departamento: string){
        this.id=id;
        this.nombre=nombre;
        this.departamento=departamento;
        this.muestra();
    }
    //Metodos
    private muestra():void{
        console.log(`${this.nombre} - ${this.departamento}`);
    }
}

const empelado1 = new EmpleadoTienda(1,"Alfonso","Ciencias");
//Las clases tambien pueden extender de otra clase padre al igual que en java
//Protected: puedes tener acceso a esa variable o metodo desde una clase hija
//unica y exclusivamente.