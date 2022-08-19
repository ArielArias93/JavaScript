//////// unir listas o arrays

const lista1 = ["hola", 3, true, null];

const lista2 = ["adios", 4, false, undefined];

console.log(lista1.concat(lista2))

//////// tambien se puede unir de esdta forma

console.log(...lista1, ...lista2)