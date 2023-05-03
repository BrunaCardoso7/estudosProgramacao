const filmes = [
    {filme: 'Moana', ano:2023},
    {filme: 'Avatar', ano:2021},
    {filme: 'kimetsu no yaiba', ano:2022}
]
let prim_letra = []
const verificador = filmes.reduce((count, filmeAtual)=>{
    
    let firstletter =  filmeAtual.filme
    prim_letra.push(firstletter)

    return prim_letra
}, 0)
let organizador = prim_letra.sort()
for (c of organizador){
    return c
}





