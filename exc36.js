// Imagine que você está criando um programa para um jogo de adivinhação.
// O programa deve gerar um número aleatório entre 1 e 100 e solicitar ao 
// usuário que tente adivinhar qual é esse número. O programa deve informar se o número digitado é maior ou menor do
// que o número gerado, até que o usuário acerte o número ou desista do jogo
let user = parseInt(prompt('tente acerta o numero de 1 a 100, digite seu palpite:'))

let contador = Math.floor(Math.random()*100)+1

while (user < contador){
    user = parseInt(prompt(`numero ${user} muito pequeno, tente de novo`))
    
}
while (user > contador){
    user = parseInt(prompt(`numero ${user} muito grande, tente de novo`))
    
}
if (user == contador){
    alert(`PARABENS VOCÊ ACERTOU, GENIAL`)
}
