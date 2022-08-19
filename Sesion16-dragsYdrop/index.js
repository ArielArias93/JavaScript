const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

parrafos.forEach(parrafo => {

    parrafo.addEventListener("dragstart", event =>{
        console.log(`inicio de arrastre del ${parrafo.innerText}`);
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        //const elementofantasma = document.querySelector(".imagen-fantasma")
        //event.dataTransfer.setDragImage(elementofantasma, 0, 0)
    })

    parrafo.addEventListener("dragend", () =>{
        console.log("Termine de arrastrar");
        parrafo.classList.remove("dragging")
        //parrafo.classList.remove("borrar")
    })
    
});

secciones.forEach(seccion => {

    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "move"
    })

    seccion.addEventListener("drop", event => {
        const parrafoId = event.dataTransfer.getData("id")
        console.log(`Parrafo id : ${parrafoId}`);
        const parrafo = document.getElementById(parrafoId)
        seccion.appendChild(parrafo)
    })
    
});

const papelera = document.querySelector(".papelera")

papelera.addEventListener("dragover", event => {

    event.preventDefault()
    event.dataTransfer.dropEffect = "copy"
})

papelera.addEventListener("drop", event => {

    const id_parrafo = event.dataTransfer.getData("id")
    console.log(`Se elimino el ${id_parrafo}`);
    document.getElementById(id_parrafo).remove()
})