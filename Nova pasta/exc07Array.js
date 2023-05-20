const nomes = ['bruna', 'beatriz', 'mina', 'momo', 'sana', 'chaeyeong'];
let cont = 0;

const namescount = nomes.reduce((cont, nomeAtual)=>{
    let firstletter = nomeAtual[0]
    if (cont[firstletter]){
        cont[firstletter]++
    }else{
        cont[firstletter] = 1
    }
    return cont
}, {})
console.log(namescount)