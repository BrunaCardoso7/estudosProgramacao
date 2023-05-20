function adicionar(){
    let sessao = document.getElementById('conteiner-text')
    let newtext = sessao.children[0].cloneNode(true)

    sessao.appendChild(newtext)
}