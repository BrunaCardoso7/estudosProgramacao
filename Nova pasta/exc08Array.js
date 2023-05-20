const pessoas = [
    {nome: 'marta', idade:28},
    {nome: 'jonas', idade: 30},
    {nome: 'maria', idade: 28}
]
let count = 0

const verificador = pessoas.reduce((count, idadeAtual)=> {
    const idade = pessoas.idade
    if (count[idade]){
        count[idade]++
    }else {
        count[idade] = 1
    }
    return count
}, {})
console.log(verificador)