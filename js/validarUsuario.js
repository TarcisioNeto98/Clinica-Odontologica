function isEmpty(str) {//Verifica se uma string é vazia!
    return (0 === str.length);
}

var botaoSubmit = document.getElementById('submeter');
var botaoReset = document.getElementById('limpar'), mensagem = document.getElementById('mensagem');
var usuario = document.getElementById('idUsuario'), senha = document.getElementById('idSenha');

botaoReset.addEventListener('click', () => {
    usuario.value = "";
    senha.value = "";
});

botaoSubmit.addEventListener('click', () => {
    if(isEmpty(usuario.value) || isEmpty(senha.value)) mensagem.textContent = "Um dos campos vazios!";
    else if(usuario.value !== "admin" || senha.value !== "1234") mensagem.textContent = "Login ou senha incorretos!";
});