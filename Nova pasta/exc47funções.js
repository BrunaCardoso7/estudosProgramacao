function calcularMedia(...notas){
    let soma = notas.reduce((acumulador, valorAtual)=> {return valorAtual + acumulador}, 0);
    let media = soma/notas.length;
    console.log(media)
}
calcularMedia(10, 6, 8)