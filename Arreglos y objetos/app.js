let nombres = ['Pablo', 'Ana', 'Carlos', 'María'];

nombres.push("Esteban");

nombres.forEach((elemento, i, array)=> console.log(elemento));

//agrega un elemento al prinicipio 
nombres.unshift("Juan");

//elimina un elemento al principio
nombres.shift();

//elimina un elemento al final
nombres.pop();

//encontrar una posicion de arreglo
let pos = nombres.indexOf("Carlos");
console.log(pos);

//eliminar algo especifico
nombres.splice(2,1);
console.log(nombres)

//imprimir un arreglo en reversa
console.log(nombres.reverse());


let persona = {
    name: "Esteban",
    hobbies: ["play guitar", "read"],
    calcAge : (yearBorn)=>(2022-yearBorn),   
}

console.log(persona);

console.log(persona.calcAge(2002));

