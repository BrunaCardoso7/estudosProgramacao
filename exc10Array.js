const filmes = [
    {filme: 'Moana', ano:2023},
    {filme: 'Avatar', ano:2021},
    {filme: 'kimetsu no yaiba', ano:2022}
]
let filmeOrdem = []
const verificador = filmes.reduce((count, filmeAtual)=>{
    
    let firstletter =  filmeAtual.filme
    filmeOrdem.push(firstletter)

    return filmeOrdem
}, 0)
let organizador = filmeOrdem.sort()
for (c of organizador){
    console.log(c)
}





