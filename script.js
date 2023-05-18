var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var díasDelMes = [31,28,31,30,31,30,31,31,30,31,30,31];


console.log ("Los meses que tienen 31 días son")
for (let index = 0; index < díasDelMes.length;index++) {
    if (díasDelMes [index]==31){
        console.log(meses[index])
    }
}

console.log("Los meses que tienen 30 días son: ")
for (let index = 0; index < díasDelMes.length; index++) {
    if (díasDelMes[index]==30) {
        console.log(meses[index])
    }
}
console.log("El mes que tiene 28 días es:")
for (let index =0; index < díasDelMes.length; index++){
    if (díasDelMes[index]==28) {
        console.log(meses[index])
    }
}