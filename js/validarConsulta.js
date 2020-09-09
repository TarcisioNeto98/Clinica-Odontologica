function isEmpty(str) {//Verifica se uma string é vazia!
    return (0 === str.length);
}

var botaoSubmit = document.getElementById('submeter');
var dentista = document.getElementById('idDentista');
var botaoReset = document.getElementById('limpar'), mensagem = document.getElementById('mensagem');
var data = document.getElementById('idDataConsulta'), valor = document.getElementById('idValorConsulta');

botaoReset.addEventListener('click', () => {
    dentista.value = "";
    data.value = "";
    valor.value = "";
});

botaoSubmit.addEventListener('click', () => {
    if(isEmpty(data.value) || isEmpty(valor.value) || dentista.value === "Selecione") alert("Um dos campos vazios!");
    else alert("Consulta cadastrada!");
});