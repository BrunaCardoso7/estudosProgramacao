// function solucao(pesos) {
//     // seu codigo aqui
//     const peso = [...pesos]
//     let diferenca = peso.reduce((acumulador, valorAtual)=> {return valorAtual - acumulador},0)
//     console.log(diferenca)
// }unction solucao(pesos) {
    // seu codigo aqui
    function solucao(pesos) {
        // seu codigo aqui
        let arr = [...pesos]; 
    
        let diferencaPeso = arr.reduce((acumulador, valorAtual)=>{
            return valorAtual - acumulador;
        },0)
    
        if (diferencaPeso >= 0 && diferencaPeso <= 5){
            return "PODEM LUTAR";
        }else if (diferencaPeso > 5){
            return "NAO PODEM LUTAR";
        }
    }
solucao(20, 18)

