//////////FUNCION GENERADORA


function* generaid() {

    let id =0;

    while (true){

        id++

        if (id === 10) {

            return id
            
        }
                }

        yield id        
    
}

const gen = generaid();

console.log(gen.next());
