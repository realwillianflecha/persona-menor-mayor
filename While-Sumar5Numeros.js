// Sumar los primeros 5 numeros (for)
let numero = 0, minimo = 0, maximo = 5, acumuladorSuma = 0
do{
    // Imprimir lo que se va a Sumar
    console.log(`${acumuladorSuma} + ${numero}`)
    // Realizamos la suma parcial
    acumuladorSuma += numero
    console.log(acumuladorSuma)
    numero++
} while (numero <= maximo)
console.log(`La suma de los primeros ${maximo} numeros es: ${acumuladorSuma}`)