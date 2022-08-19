/////// ORDENAMIENTO DE ARRAYS DE MENOR A MAYOR Y DE MAYOR A MENOR

const array= [1, 31, 2, 5, 10, 8, 6]

console.log(array);

array.sort((a, b) => a - b)

console.log(array)

array.sort((a, b) => b - a)

console.log(array)

/////////////VERIFICAR SI EXISTE UN ELEMENTO ESPECIFICO EN EL ARRAY

const existe = array.some(numero => numero == 31)

console.log(existe)

//////////BUSQUEDA CON OBJETOS EN EL ARRAY

const listanombres= [
    {nombre: "Ariel",
    edad: 29},
    {nombre: "Javier",
    edad: 42},
    {nombre: "JAcinto",
    edad: 25},
]

const ExisteNombre = listanombres.some(exist => exist.nombre == "Ariel")

console.log(ExisteNombre)