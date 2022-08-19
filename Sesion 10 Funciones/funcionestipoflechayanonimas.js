/////////// COMO OPERAR EN ARRAYS ATRAVES DE FUNCIONES TIPO FLECHA Y ANONIMAS

         /////ESTA SE DENOMINA FUNCION TIPO FLECHA

const array = [1, 2, 6, 9, 5, 8, 10]

const array2 = array.map((valor) => valor * 2)

console.log(array2);

        //////ESTA SE CONSIDERA FUNCION ANONIMA

function multi2(valor) {

    return valor * 2
    
}

console.log(array.map(multi2));