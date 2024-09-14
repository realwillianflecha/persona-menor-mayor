// Funciones incorporadas en JavaScript

// Obtener el largo de una cadena
let cadena = 'Hola'
console.log(`Largo cadena ${cadena.length}`)

// No podemos modificar una cadena en JavaScript
// Una cadena es inmutable
console.log(cadena[0])
cadena[0] = 'a'
console.log(cadena[0])

cadena = 'Adios'
console.log(cadena)

// Recorremos los elementos de una cadena
for (let i = 0; i < cadena.length; i++){
    console.log(`${i} - ${cadena[i]}`)
}
