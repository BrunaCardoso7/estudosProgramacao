const numberInt = [1, 2, 3, 4, 5]
const avarege = numberInt.reduce((acumalador, numeroAtual)=>{ 
    return (acumalador + numeroAtual)
})/numberInt.length

console.log(avarege)
