////// COMO CREAR FUNCIONES


saludar('Ariel')

function saludar(nombre) {

    console.log(`Hola ${nombre}`);
    
}

/////// CREAR UNA FUNCION CON UN OBJETO

let persona = {nombre: 'Ariel', apellido: 'Arias'}

saludar2(persona)

function saludar2(nombreApellido) {

    console.log(`Hola ${nombreApellido.nombre} ${nombreApellido.apellido}`)
    
}



