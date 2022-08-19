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

const mifigura = new figura("rojo")

console.log(mifigura.getcolor);
