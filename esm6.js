const sum = function (...valores){


    let valor = valores.reduce((acumulador, valorAtual)=>{
        return acumulador + valorAtual
    })
    return valor
}

const media = function (...notas){


    let resultado = notas.reduce((notas, notaAtual)=>{
        return notas + notaAtual
    })/notas.length
    return resultado
}
console.log(sum(1, 2, 3))
console.log(media(1, 2, 3))
