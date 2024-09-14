// Matrices en JavaScript
// Declaracion de una Matriz
let matriz = [[100, 200, 300],[400, 500, 600]]

// Accedemos a los valores
console.log(`Valor [0][0] = ${matriz[0][0]}`)
console.log(`Valor [1][2] = ${matriz[1][2]}`)

// Iterar los valores
console.log(matriz.length) // Largo renglones
console.log(matriz[0].length) // Largo columnas
console.log(matriz[1].length)

for (let ren = 0; ren < matriz.length; ren++){
    for (let col = 0; col < matriz[ren].length; col++){
        console.log(`Valor [${ren}][${col}] = ${matriz[ren][col]}`)
    }
}