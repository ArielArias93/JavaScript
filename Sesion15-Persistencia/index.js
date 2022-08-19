
/*
const { json } = require("express/lib/response")

const nombre = "Ariel"
const apellido = "Arias"

const nomap ={
    nombre,
    apellido
} */

//localStorage.setItem("Nombre", "Ariel")
localStorage.setItem("Nombre", "Messi")
document.cookie = "NombreCookie = ArielCookie"
sessionStorage.setItem("Nombre", "Armani") 
localStorage.setItem("nomap", JSON.stringify({nombre: "Ariel", apellido: "Arias"}))

console.log(localStorage.getItem("Nombre"));

console.log(JSON.parse(localStorage.getItem("nomap")));

console.log(document.cookie);

////JSON.stringify Convierte un objeto/array en string
///JSON.pase convierte un objeto/array convertido con stringify en un objeto de javascript