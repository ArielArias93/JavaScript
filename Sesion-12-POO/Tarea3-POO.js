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

    calculararea(){

        return -1

    }
}

class circulo extends figura {
 
    constructor(radio, color){

        super();
        this.radio = radio;
        this.color = color;

        console.log(`El circulo tiene un radio de ${radio} y su color es ${color}` );

        }

        calculararea(){

            const pi = 3.14

            return pi*this.radio*this.radio


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

    calculararea(){

        return  this.base*this.altura

    }
 
}

const mifigura = new figura("rojo")

const micirculo = new circulo("26", "Azul")
 
const mirectangulo = new rectangulo("8", "10", "verde")

console.log(mifigura.calculararea())

console.log(mirectangulo.calculararea())

console.log(micirculo.calculararea());





