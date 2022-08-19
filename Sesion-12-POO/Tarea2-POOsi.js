class figura{

    constructor(clr){

        this._color = clr; 
    }

    get getcolor(){

        return "La figura es de color " + this._color;

    }

    set setcolor(clr){

        this._color = clr;

    }
}

class circulo extends figura {
 
    constructor(radio, color){

        super();
        this.radio = radio;
        this.color = color;

        console.log(`El circulo tiene un radio de ${radio} y su color es ${color}` );

        }

    }        


class rectangulo extends figura {

    constructor(base, altura, color){

        super();
        this.base = base;
        this.altura = altura;
        this.color = color;

        console.log(`El rectangulo tiene una base de ${base}, una altura de ${altura}, y es de color ${color}`);

    }
 
}

const mifigura = new figura("rojo")

const micirculo = new circulo("26", "Azul")
 
const mirectangulo = new rectangulo("8", "10", "verde")

