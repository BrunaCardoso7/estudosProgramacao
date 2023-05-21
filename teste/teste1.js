const botao = document.getElementById('btn');
const novoTexto = document.getElementById('text');
botao.onclick = ()=>{
    const primeiroNumero = Number(document.getElementById('num1').value);
    const segundoNumero = Number(document.getElementById('num2').value);
    let soma = primeiroNumero + segundoNumero;
    novoTexto.textContent = soma;
}