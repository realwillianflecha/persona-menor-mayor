// Paso por valor en JavaScript
// En JavaScript los tipos simples se pasan por valor
function cambiarValor(parametro){
    parametro = 20
}

// Llamamos a la funcion
let argumento = 10
console.log(`Antes de llamar a la funcion: ${argumento}`)
cambiarValor(argumento)
console.log(`Despues de llamar a la funcion: ${argumento}`)
