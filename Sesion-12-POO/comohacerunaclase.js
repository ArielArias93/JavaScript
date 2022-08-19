class persona {
    constructor(){

        console.log("Hemos creado una persona")
        this.nacionalidad = "Argentino"
    }

    saludo() {return "Hola"}

    tipo() {return "Hola soy una persona"}

}


const Ariel = new persona;


console.log(Ariel.nacionalidad);

console.log(Ariel.saludo());

console.log(Ariel.tipo());

Ariel.nacionalidad = "Aleman"

console.log(Ariel.nacionalidad)

class perso {

    #id = 'personita'
    construc(){

                console.log("Creamos una persona");

    }

    #dameid() {return this.#id}

    idpublico() {return this.#dameid()}

}

const Arielito = new perso;

console.log(Arielito.idpublico());