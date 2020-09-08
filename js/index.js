var itens = document.getElementById('clicavel');
var sub_menu = document.getElementById('sub-menu');

var i = 0;

itens.addEventListener('click', function(){
    sub_menu.className = ((i % 2 == 0) ? "" : "desaparecer");
    i++;
});