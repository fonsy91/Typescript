//ENUM 
//Las enumeraciones permiten a un desarrollador definir un conjunto de constantes con nombre
enum Roles{
    User = 'USER',
    Admin = 'ADMIN',
    SuperAdmin = 'SUPERADMIN'
}

console.log(Roles.Admin);

//OBJECTS
const roles = {
    User:0,
    Admin:1,
    SuperAdmin:2  
};

console.log(roles.Admin);

//EJEMPLO DE OBJETOS EN TYPESCRIPT *********
//*************************************** */
interface Planet{
	name: string;
	galaxy: string;
	numberOfMoons: number;
	weight: number;
}

//Object with properties
let planet: Planet = {
    name : "Earth",
    galaxy : "Milky Way",
    numberOfMoons : 1,
    weight : 100000
};

console.log("Planet Name :- " + planet.name);
console.log("Planet Galaxy :- " + planet.galaxy);
console.log("Planet Number of Moons :- " + planet.numberOfMoons);
console.log("Planet Weight :- " + planet.weight);