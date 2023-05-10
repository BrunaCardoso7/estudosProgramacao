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