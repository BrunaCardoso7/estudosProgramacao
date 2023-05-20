class app{
    constructor(){
        this.spaceship = null
    }
    start(){
        let naveopcao
        do {
            naveopcao = this.mostrarMenu
            this.verificar(naveopcao)
        }while (naveopcao != "3")
        this.printAnd()
    }
    cadastro(){
        let nome = prompt('qual o nome da nave')
        let tripQuantidade = prompt('qual a quantidade de tripulantes')
        let tipoNave = this.askNave()
        if (tipoNave == "1"){
            let quantidadeArma = prompt('Qual a quantidade de arma?')
            this.spaceship = new naveBatalha (nome, tripQuantidade, quantidadeArma)
        }else if (tipoNave == "2"){
            let quantidadeLugar = prompt('Qual a quantidade de lugar na nave?')
            this.spaceship = new naveTransporte (nome, tripQuantidade, quantidadeLugar)
        }
    }
    askNave(){
        let naveopcao
        while (!["1", "2"].includes(naveopcao)){
            naveopcao = prompt('digite \n 1- nave de batalha \n 2- nave de transporte')
        }
        return naveopcao
    }
    mostrarMenu(){
        
        const menu = prompt('qual atividade você deseja realizar? \n 1-acelerar a nave\n 2-trocar a nave\n 3-imprimir e sair')
        let naveopcao = prompt(menu)
        while(!["1", "2", "3"].includes(menu)){
            naveopcao = prompt(menu)
        }
        return naveopcao
    }
    verificar(naveopcao){
        switch (naveopcao){
            case "1":
                this.aceleration()
                break
            case "2":
                this.askNave()
                break
            case "3":

        }
    }
    aceleration(){
        let aceleration = parseInt(prompt('Quanto você quer acelerar'))
        this.spaceship.aceleration(aceleration)
    }
    printAnd(){
        let msgfl = "nome: " + this.spaceship.nome + "quantodade dde tripulantes: " + this.spaceship.tripQuantidade
            alert(msgfl)
    }

}