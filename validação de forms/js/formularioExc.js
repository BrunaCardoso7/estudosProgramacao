const checkBox = document.querySelector('#chkAceito')
const btn__add = document.querySelector('#btn')
btn__add.disabled = true

const input__titulo = document.querySelector('#txtTitulo')
const input__descricao = document.querySelector('#txtDescricao')

const feedbackMessage = document.querySelector('#feedbackMessage')

const formulario = document.querySelector('.formCadastro')

const conteiner = document.querySelector('#contador')
const conta = conteiner.getElementsByTagName('span')[0]
const maxchar = input__descricao.maxLength

const messageerror = document.querySelector('#feedbackMessage')

formulario.addEventListener("submit", function(e){
    verificarCamposInputs(e)
    const exit = document.querySelector('#closer')
    exit.addEventListener("click", function(){
        messageerror.classList.remove('show')
        
    })
})

input__descricao.addEventListener("input", function(){
    conteiner.style.display = 'block'
    contarCaracteres()
})


checkBox.addEventListener("click", function(){
    verificarChecked()
})


function contarCaracteres(){

    const totalNumDigitado = input__descricao.value.length
    const numerosRestante = parseInt(maxchar)-parseInt(totalNumDigitado)
    conta.textContent = numerosRestante
    
}
function verificarChecked(){
    if (checkBox.checked){
        btn__add.disabled = false
    }else{
        btn__add.disabled = true
    }
}
function verificarCamposInputs(e){
    if(!input__titulo.value){
        showerror('preencha o campo titulo')
        e.preventDefault()
        input__titulo.focus()
    }
    function showerror(e){
        messageerror.classList.add('show')
        messageerror.getElementsByTagName('p')[0].textContent = e
    }
}
