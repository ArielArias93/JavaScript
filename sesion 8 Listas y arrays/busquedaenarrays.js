///////////SUMAR TODOS LOS ELEMENTOS DE UN ARRAY

const array = [7, 2, 4, 8, 5]
let suma=0;

array.forEach(valor => {
     
    suma += valor;
});

console.log(suma)

/////////////////ENCONTRAR UN OBJETO EN UN ARRAY

const listaobjetos= [
{nombre: "juan",
edad: 22},
{nombre: "daniel",
edad: 26},
{nombre:"Ariel",
edad:29}
]

const listanombre=listaobjetos.find(o => {

return o.nombre === "Ariel"

})

console.log(listanombre.nombre)

