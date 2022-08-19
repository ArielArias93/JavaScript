////////// COMPARAR FECHAS

const fecha = new Date(1970, 10, 20, 1, 23, 52, 192);

console.log(fecha)

const fecha2= new Date(1970, 10, 20, 1, 23, 52, 192);

console.log(fecha.getTime() == fecha2.getTime())

/////// OBTENER FECHA CORTA
console.log(fecha2.toLocaleDateString());