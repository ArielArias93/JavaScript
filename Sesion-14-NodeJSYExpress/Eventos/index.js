const htexto = document.getElementById("h-texto")

console.log(htexto);

htexto.addEventListener("cambiotexto", evento => {

    console.log(evento.detail)
    htexto.innerText = evento.detail.texto
    htexto.style.color = evento.detail.color

})

function cambiartexto(nuevotexto, color) {

    const evento = new CustomEvent("cambiotexto", {

        detail:{

                texto: nuevotexto,
                color

        }
    })

    htexto.dispatchEvent(evento)
    
}

// cambiartexto("Este es el nuevo texto", "blue")