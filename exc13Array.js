/*Crie um array de objetos com informações sobre músicas (título, artista, ano de lançamento)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
e imprima apenas as informações das músicas lançadas antes de um determinado ano usando o método filter().*/
const songs = [
    {titulo: 'Set me free', artista: 'twice', anoLancamento: 2023},
    {titulo: 'Moonlight sunrise', artista: 'twice', anoLancamento: 2023},
    {titulo: 'Talk that thalk', artista: 'twice', anoLancamento: 2022},
    {titulo: 'The feels', artista: 'twice', anoLancamento: 2022},
    {titulo: 'Alcohol free', artista: 'twice', anoLancamento: 2022},
    {titulo: 'Doughnut', artista: 'twice', anoLancamento: 2022}
]
let filteringSongs = songs.filter(elemento=>{
    return elemento.anoLancamento == 2023
})
console.log(filteringSongs)