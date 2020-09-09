var botaoSubmit = document.getElementById('submeter');
var botaoReset = document.getElementById('limpar'), mensagem = document.getElementById('mensagem');
var usuario = document.getElementById('idUsuario'), senha = document.getElementById('idSenha');

botaoReset.addEventListener('click', () => {
    usuario.value = "";
    senha.value = "";
});

botaoSubmit.addEventListener('click', () => {
    if(isEmpty(usuario.value) || isEmpty(senha.value)) alert("Um dos campos vazios!");
    else if(usuario.value !== "admin" || senha.value !== "1234") alert("Login ou senha incorretos!");
});