class estudiante {

    constructor(nombre, asignaturas){
        
        this.nombre = nombre
        this.asignaturas = asignaturas
    }
    
    obtendatos(){

        return
        console.log(`Nombre del alumno: ${this.nombre}, Asignaturas: ${this.asignaturas}`);
    }
        
}

const nuevoestudiante = new estudiante('Ariel Arias', 'HTML, Javascript, CSS')    

console.log(nuevoestudiante);

console.log(nuevoestudiante.obtendatos()); 