//////////BUSCAR EN ARRAY POR ALGUNA CONDICION EN ESTE CASO POR MAYORES DE 30 AÑOS DE EDAD

const array=[

    {nombre: "Ariel",
    edad:29},
    {nombre: "Pablo",
    edad: 32},
    {nombre: "Fernanda",
    edad:33},
    {nombre: "Pepita",
    edad:23},
]

const arrayEdad = array.filter(obj => {

    if (obj.edad>30) {
        return true;
    }
    else{
        return false;
    }
}
)

console.log(arrayEdad)

////////forma mas corta de buscar

const arrayEdad2 = array.filter(obj2 => obj2.edad>30)

console.log(arrayEdad2)

