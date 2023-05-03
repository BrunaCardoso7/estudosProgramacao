const filmes = [
    {filme: 'Moana', ano:2023},
    {filme: 'Pocoio', ano:2021},
    {filme: 'kimetsu no yaiba', ano:2022}
]

const verificador = filmes.reduce((count, filmeAtual)=>{
    let firstletter =  filmeAtual.filme[0]
    console.log(firstletter)
}, 0)
 




