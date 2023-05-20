// Escreva um programa que solicite ao usuário que digite um número de 1 a 12,
// e então exiba o nome do mês correspondente (1 = Janeiro, 2 = Fevereiro, etc).
let meseAno = parseInt(prompt('escolha um mês a partir dos números 1 à 12:'))
while(meseAno>12){
    meseAno = parseInt(prompt('tente novamente, escolha um mês a partir dos números 1 à 12:'))

}
switch(meseAno){
    case 1:
        alert('janeiro')
        break
    case 2:
        alert('fevereiro')
        break
    case 3:
        alert('março')
        break
    case 4:
        alert('abril')
        break
    case 5:
        alert('maio')
        break
    case 6:
        alert('junho')
        break
    case 7:
        alert('julho')
        break
    case 8:
        alert('agosto')
        break
    case 9:
        alert('semtembro')
        break
    case 10:
        alert('outubro') 
        break
    case 11:
        alert('novembro')
        break
    case 12:
        alert('dezembro')
        break
    
}