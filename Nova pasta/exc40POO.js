class monitoramentoSpaceship {
    static get desaceleration(){
        return 0.17;
    }
    constructor(nome, tripQuantidade){
        this.nome = nome;
        this.tripQuantidade = tripQuantidade;
        this.velocity = 0;
    }
    aceleration(novaVelocidade){
        return this.velocity += novaVelocidade*(1- monitoramentoSpaceship.desaceleration)
    }
}
class naveBatalha extends monitoramentoSpaceship{
    constructor(nome, tripQuantidade, armas){
        super(nome, tripQuantidade)
        this.armas = armas;
    }
}
class naveTransporte extends monitoramentoSpaceship{
    constructor(nome, tripQuantidade, lugares){;
        super(nome, tripQuantidade, this.velocity);
        this.lugares= lugares;
    }
}
let nave = new naveBatalha ("apolos", 30, 3)
nave.aceleration(200)
console.log(nave)
// let menu = parseInt(prompt("escolha uma opção\n 1-Acelerar nave\n 2-Trocar nave\n 3-Imprimir e sair"));


