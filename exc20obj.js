/*lista com as naves cadastradas */
let velocitySpaceship = {
    spaceship: []
}
/*função de cadastro de naves */
let cadastro = function({nome, tipo, velocidadeinit}){
    velocitySpaceship.spaceship.push({name:nome, type:tipo, velocityInit: velocidadeinit})
}

cadastro({nome:'supernova', tipo:'espacial', velocidadeinit: 0})
/*função de acelerar a nave*/
let acelerar = function(vlr){
    return velocitySpaceship.spaceship[0].velocityInit+=vlr
}
/*função de manter a nave parada */
let naoAcelerar = function(){
    return velocitySpaceship.spaceship[0].velocityInit = 0
}

/*função que ativa a função acelerar ou desaceler de acordo com o valor parametrizaddo*/
let menu = function(vlrs){
    let resposta = vlrs
    switch(resposta){
        case 'sim':
            return acelerar(30)
            break
        case 'não':
            return naoAcelerar()
            break
    }
}
/*chamada das funções*/
menu('sim')
console.log(velocitySpaceship)