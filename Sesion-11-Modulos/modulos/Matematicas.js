function suma(a, b){
    return a + b;
}

function multiply(a, b){

    return a * b;
}

function eleva (a, b){
    return a ** b;
}

function factorial(a) {

    let factorial =1

    for (let i=1; i <=a; i++) {

        factorial *= i;    }

    return factorial;
}


//////////////// EXPORTAR LOS MODULOS

module.export = {

    suma, multiply, eleva, factorial
}