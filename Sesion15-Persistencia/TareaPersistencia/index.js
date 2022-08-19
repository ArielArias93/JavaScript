const nombre = "Ariel"
const apellido = "Arias"

const nomape = {

    nombre,
    apellido
}

localStorage.setItem("nomape", `${nombre} ${apellido}`)

sessionStorage.setItem("nomape", `${nombre} ${apellido}`)

document.cookie = `nombreyapellido = ${nomape}; max-age=<120>`
