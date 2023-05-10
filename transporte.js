class naveTransporte extends monitoramentoSpaceship{
    constructor(nome, tripQuantidade, lugares){;
        super(nome, tripQuantidade, this.velocity);
        this.lugares= lugares;
    }
}