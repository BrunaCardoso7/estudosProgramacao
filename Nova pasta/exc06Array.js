const itens = [
    {descricao: 'pen', quantidade: 1, preco: 2}, 
    {descricao: 'book', quantidade: 2, preco: 10}, 
    {descricao: 'eraser', quantidade: 1, preco: 3}
]
const total = itens.reduce((soma, itenAtual)=>{
     return soma + itenAtual.quantidade + itenAtual.preco
}, 0)

console.log(total)
