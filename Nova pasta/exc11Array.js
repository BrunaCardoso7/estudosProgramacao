/*Crie dois arrays de números inteiros e crie um terceiro array com a soma 
dos valores dos dois primeiros arrays.*/
const firstArray = [1, 2, 3, 4, 5]
const secondArray = [1, 2, 3, 4, 5]
const thirdArray = []

let firstSum = firstArray.reduce((count, numberCurrent)=>{
    let sum = count + numberCurrent
    return sum
})
let secondSum = secondArray.reduce((count, numberCurrent)=>{
    let sum = count + numberCurrent
    return sum
})

let sumValue = firstSum + secondSum

thirdArray.push(sumValue)

console.log(thirdArray)