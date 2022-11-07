"use strict";
//ENUM 
//Las enumeraciones permiten a un desarrollador definir un conjunto de constantes con nombre
var Roles;
(function (Roles) {
    Roles["User"] = "USER";
    Roles["Admin"] = "ADMIN";
    Roles["SuperAdmin"] = "SUPERADMIN";
})(Roles || (Roles = {}));
console.log(Roles.Admin);
//OBJECTS
const roles = {
    User: 0,
    Admin: 1,
    SuperAdmin: 2
};
console.log(roles.Admin);
//Object with properties
let planet = {
    name: "Earth",
    galaxy: "Milky Way",
    numberOfMoons: 1,
    weight: 100000
};
console.log("Planet Name :- " + planet.name);
console.log("Planet Galaxy :- " + planet.galaxy);
console.log("Planet Number of Moons :- " + planet.numberOfMoons);
console.log("Planet Weight :- " + planet.weight);
