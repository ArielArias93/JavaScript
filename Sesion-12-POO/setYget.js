////////// GET Y SET

class auto {

    constructor (n){

        this._tipo = n;
    }

    get mitipo(){

        return " Mi auto es de tipo " + this._tipo;
    }

    set mitipo(n){

        

        this._tipo = n;
    }
}

const miauto = new auto ("nafta");

console.log(miauto.mitipo)

miauto.mitipo = "diesel";

console.log(miauto.mitipo)