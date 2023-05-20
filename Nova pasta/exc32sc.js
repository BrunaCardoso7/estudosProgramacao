// Crie um programa que pergunte ao usuário qual é o seu sabor de sorvete favorito.
// Use o switch case para exibir uma mensagem diferente para cada sabor (por
// exemplo, "Morango é o sabor mais popular!" ou "Chocolate é o meu favorito!")
let sorvetePreferido = parseInt(prompt('Qual o seu sabor de sorvete preferido? \n 1-morango \n 2-chocolate'))

while (sorvetePreferido !== 1 && sorvetePreferido !== 2){
    sorvetePreferido = parseInt(prompt('Opção inválida. Qual o seu sabor de sorvete preferido? \n 1-morango \n 2-chocolate'))
}
switch (sorvetePreferido){
    case 1:
        alert('morango é o mais popular!')
        break
    case 2:
        alert('chocolate é o meu favorito')
        break
}