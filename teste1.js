function solucao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3) {
    // seu codigo aqui
    itensColetados = new Array(...itensColetados);
    if(itensColetados.includes(itemNecessario1)&& 
        itensColetados.includes(itemNecessario2)&&
        itensColetados.includes(itemNecessario3))
    {
        console.log("PODE ENFRENTAR");
    }else{
        console.log("NAO PODE ENFRENTAR");
    }
}
solucao(["comida", "sapato", "espada", "cavalo"], "comida", "meia", "sapato")