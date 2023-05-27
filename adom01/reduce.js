let nomes = ['bruna', 'ludmilla', 'maria', 'joão', 'bianca']

let contadorDeInicial = array.reduce((nomes, nomeAtual)=>{
    let primeiraLetra = nomeAtual[0]
    if(nomeAtual[primeiraLetra]){
        nomeAtual[primeiraLetra]++
    }else {
        nomeAtual[primeiraLetra] = 1
    }
}, {})
console.log(contadorDeInicial)