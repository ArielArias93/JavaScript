///////////POLIMORFISMO

class clase1 {

      descripcion(){

        console.log("Esto es la descripcion de la clase 1");
    }
}

class clase2{

    descripcion(){

        console.log("Descripcion de la clase 1");
    }
}

    const d = (obj) => {

        if  (typeof obj.descripcion == 'function') obj.descripcion()

    }

    const c1 = new clase1()
    const c2 = new clase2()

    console.log(c1.descripcion());

    console.log(c2.descripcion());

    console.log(d(c1))