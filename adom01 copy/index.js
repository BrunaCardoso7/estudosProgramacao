// Crie um formulário com campos de nome e email. Ao enviar o formulário, exiba 
// uma mensagem de boas-vindas na página com o nome digitado.
function cadastrou(){
    const nome = document.getElementById('name').value
    const email = document.getElementsByClassName('email')
    const msg = document.getElementById('mensagem')

    msg.innerHTML = `olá bem-vindo(a) ${nome}`

}