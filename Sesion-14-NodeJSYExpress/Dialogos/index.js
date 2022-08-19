const boton = document.querySelector("#btn")

//console.log(boton);

boton.addEventListener("click", () => {

    //console.log("click");
    //alert("Se ha hecho click!")
    //confirm("Estas de acuerdo?") && console.log("Ok!");
    //confirm("Estas de acuerdo?") ? console.log("Ok!") : console.log("No")

    const respuesta = confirm("Estas seguro?")

    if (respuesta) {

        console.log("Estas de acuerdo!");
        
    }
    else{

        console.log("No estas de acuerdo!");

    }

})

const btninfo = document.querySelector("#info")

btninfo.addEventListener("click", () =>{

    const nombre = prompt("Cual es tu nombre?")

    if (nombre) {
        
        console.log(`Tu nombre es ${nombre}`);

    } else {

        console.log("No has ingresado ningun nombre");

    }

})

const lista = [{
    nombre: 'Ariel',
    edad: 29
}, {
    nombre: 'Gallardo',
    edad: 45
}, {
    nombre: 'Pity',
    edad: 26
}]

console.table(lista);