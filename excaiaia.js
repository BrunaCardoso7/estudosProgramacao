// function solucao(pesos) {
//     // seu codigo aqui
//     const peso = [...pesos]
//     let diferenca = peso.reduce((acumulador, valorAtual)=> {return valorAtual - acumulador},0)
//     console.log(diferenca)
// }unction solucao(pesos) {
    // seu codigo aqui
function solucao(...pesos) {
    let diferencaPeso = 0
    for (i of pesos){
        let diferença = Math.abs(diferencaPeso -= i)
        return diferença
    }
    if (diferença <= 5){
        console.log( "PODEM LUTAR");
        break
    }else{
        console.log( "NAO PODEM LUTAR");
        break
    }
}
solucao(20, 18)

