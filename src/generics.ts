//Generics 

interface Person{
    numero: number;
    nameUser: string;
}

interface Employee extends Person{
    role: string;
}


interface Product{
    numero: number;
    nameUser: string;
    precio: number;
}

class People{
    private items: Person[] = [];

    addItem(newItem: Person): void{
        this.items.push(newItem);
    }

    getItems(): void{
        console.log(`Lista de Items,`,JSON.stringify(this.items));
    }

    getNames(): string[] {
        return this.items.map((item) => item.nameUser);
    }

    getItemById(id:number): Person | undefined{
        return this.items.find((item: Person) => item.numero === id);
    }
}

const CollecionPersonas = new People();
const newData = {
    numero: 1,
    nameUser: 'Alfonso'
}

const newData2 = {
    numero: 2,
    nameUser: 'Juan'
}

CollecionPersonas.addItem(newData);
CollecionPersonas.addItem(newData2);
CollecionPersonas.getItems();

//Hasta aqui todo bien pero si ahora nso dicen tambien queremos agregar productos 
//lo mas rapido seria duplicar el codigo de People y cambiarlo para producto pero
//no tiene sentido otra solucion seria usar el type union,
//Y donde teniamos Person agregar dataType y valdria para ambos  
//type dataType = Person | Product;



class DataCollection<T extends (Person | Product)>{
    private items: T[] = [];

    addItem(newItem: T): void{
        this.items.push(newItem);
    }

    getItems(): void{
        console.log(`Lista de Items,`,JSON.stringify(this.items));
    }
    
    getNames(): string[] {
        return this.items.map((item) => item.nameUser);
    }

    getItemById(id:number): T | undefined{
        return this.items.find((item: T) => item.numero === id);
    }
    
}

//Para evitar los errores que aparecen en los metodos getNames y getItemById
//existen varias maneras:
//class DataCollection<T extends Person>
//class DataCollection<T extends (Person | Product)>
//class DataCollection<T extends {id:number, name:string}>


const productCollection = new DataCollection<Product>();
const newData3 = {
    numero: 3,
    nameUser: 'Sofia',
    precio: 333
}

productCollection.addItem(newData3);
productCollection.getItems();

const productCollection2 = new DataCollection<Employee>();

//Tambien se puede usar el generic para una interface 
interface Data<T>{
    addItem(newItem: T): void;
}