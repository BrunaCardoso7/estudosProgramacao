// Crie uma classe de um carro com métodos para ligar, desligar, acelerar e frear. 
// Crie também atributos para armazenar a velocidade atual e a velocidade máxima do carro.
class carro{
    constructor(velociadeAtual, velociadeMax){
        this.velociadeAtual = velociadeAtual
        this.velociadeMax = velociadeMax
    }
    ligar(){
        console.log('vrum vrum carro ligado')
    }
    desligar(){
        console.log('carro desligou')
    }
    acelerar(aceleration){
        if(aceleration < this.velociadeMax){
            this.velociadeAtual += aceleration
        }else{
            
            throw new Error('essa velocidade excede a velocidade maxima suportada pelo carro, desacelere')
        }
    }
    freiar(){
       return this.velociadeAtual = 20
    }
}
let fiat = new carro (20, 80)
try{
    fiat.ligar()
    fiat.acelerar(80)
}catch(Error){
    console.log(Error.message)
    fiat.freiar()
}finally{
    console.log(fiat)
}