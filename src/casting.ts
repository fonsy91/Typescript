//Casting de datos 
//Imagina que recibes un dato de una API o desde un input 
let channel: any = "Alfonso";
//Si quieres convertirlo a un string 
let ChannelStr = <string>channel;
//Otra forma de hacerlo 
let ChannelStr2 = channel as string;
//Si estas cogiendo un dato de un HTML HTMLElemnt
const myCanvas = document.getElementById('main') as HTMLCanvasElement;
const myCanvas2 = <HTMLCanvasElement>document.getElementById('main');