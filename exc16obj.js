/*Crie um objeto "agenda" que 
armazene informações de contatos, cada contato deve 
ter as propriedades "nome", "telefone" e "email".*/
/*Adicione um método "adicionarContato" ao objeto agenda que permita adicionar 
um novo contato. Adicione um método "removerContato" ao objeto agenda 
que permita remover um contato existente*/

let agenda = {
    contatos: [],
    
}

let adicionarContato = function (nome, telefone, email){
    let novoContato = { nome: nome, telefone: telefone, email: email }
    agenda.contatos.push(novoContato)
}
let removeContact = function(){
    agenda.contatos.pop()
}

adicionarContato('bruna', 40028922, 'email@gmail.com')
adicionarContato('joana', 40028922, 'email@gmail.com')
adicionarContato('joao', 40028922, 'email@gmail.com')

removeContact()

console.log(agenda)