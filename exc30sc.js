// Escreva um programa que pergunte ao usuário qual é o seu animal 
// favorito. Use o switch case para exibir uma mensagem diferente para
//  cada animal (por exemplo, "Gatos são fofos!" ou "Cachorros são leais!").
let animaisUsuario = prompt('qual seu animal preferido, gato ou cachorro?')
while(animaisUsuario !== 'gato' && animaisUsuario !== 'cachorro'){
    animaisUsuario= prompt('repita o procedimento, qual o seu animal preferido? gato ou cachorro')
}
switch (animaisUsuario){
case 'gato':
    alert(`gatos são legais`)
    break
case 'cachorro':
    alert(`cachorros são fofos`)
    break
}
