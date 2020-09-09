function isEmpty(str) {//Verifica se uma string é vazia!
    return (0 === str.length);
}

var botaoSubmit = document.getElementById('submeter');
var botaoReset = document.getElementById('resetar');
var nome = document.getElementById('idProcedimento'), descricao = document.getElementById('idDescricao');

botaoReset.addEventListener('click', () => {
    nome.value = "";
    descricao.value = "";
});

botaoSubmit.addEventListener('click', () => {
    if(isEmpty(nome.value) || isEmpty(descricao.value)) alert("Campos vazios!");
    else alert("Procedimento cadastrado!")
});