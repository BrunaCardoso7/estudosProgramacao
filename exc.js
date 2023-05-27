let nomes = ['bruna', 'ludmilla', 'maria', 'joão', 'bianca']

let contadorDeInicial = nomes.reduce((nomes, nomeAtual)=>{
    let primeiraLetra = nomeAtual[0]
    if(nomes[primeiraLetra]){
        nomes[primeiraLetra]++
    }else {
        nomes[primeiraLetra] = 1
    }
    return nomes
}, [])
console.log(contadorDeInicial)
console.log(nomes)