///////// HERENCIA

class automovil {

    constructor() {

        this.marca

        console.log("Constructor de la clase padre automovil ");

    }
    
    arrancar(){

        console.log("Vehiculo en marcha");
    }  

}

class auto extends automovil {

    constructor() {

        super();
        console.log("Soy un auto");
    }

}

class camion extends automovil {

    constructor (ruedas, tipo){

        super();
        this.ruedas = ruedas;
        this.tipo = tipo;
           
        console.log(`Soy un camion de ${ruedas} ruedas  y de tipo ${tipo}`) 
    }
}

const miauto = new automovil()

console.log(miauto);

miauto.marca = "Lamborguini"

console.log(miauto.marca);

const micamion = new camion("8", "nieve")

console.log(micamion)

