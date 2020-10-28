<template>
    <div class="content container-fluid" method="get">
      <!--<img src="../assets/img/logo.png" class="rounded mx-auto d-block mb-4">-->
        <form id="form-login" class="pt-4">
          <div class="btn-group mb-4" role="group" aria-label="Exemplo básico">
            <button name="login" type="button" class="btn botao text-uppercase font-weight-bold mr-4 login">
            Login</button>
            <button name="cadastro" v-on:click="clique" 
            type="button" class="btn botao text-uppercase font-weight-bold cadastrar">
            Cadastrar</button>
          </div>
          <div v-bind:class="alerta" role="alert">
            <span v-html="alertaConteudo"></span>
          </div>
            <div class="form-group mb-5">
                <input v-model="email" type="email" name="Usuario" id="idUsuario" class="form-control border-secondary" 
                placeholder="Informe o seu email"> 
            </div>
            <div class="form-group mt-3 mb-5">
                <input v-model="senha" type="password" name="Senha" id="idSenha" class="form-control border-secondary" 
                placeholder="Informe a senha do usuário">
            </div>
            <div class="link-usuario mb-4">
              <a href="#">ESQUECI MINHA SENHA</a>
              <a href="">ESQUECI MEU NOME DE USUÁRIO</a>
            </div>
            <div class="grupo mt-5">
              <input type="button" v-on:click="login($event)" id = "submeter" value="Entrar" class="btn btn-lg w-100">
            </div><!--v-on:click="login()"-->
        </form>
    </div>
</template>

<script>
var validar = require('../util/validacao');

var cont = 0;
export default{
  name: 'Login',
  data: function(){
    return {
      email: '',
      senha: '',
      alerta: 'alert alert-danger ocultar',
      alertaConteudo: '',
      user: null
    }
  },
  methods: {
    isEmpty: function(obj) {
      return Object.keys(obj).length === 0;
    },
    mostrar: function(data){
      if(this.isEmpty(data)){
        alert(JSON.stringify(data));
        alert("Usuario não encontrado!");
      }
      else{
        this.user = data;
        this.$router.push({name: 'Home', params: {id: this.user.id, email: this.user.email}});
        this.$emit('aparecer');
      }
    },
    login: function(){
      if(this.validarEmail() && this.validarSenha()){
        this.$http.get("http://localhost:8095/quatum/api/users/?email="+this.email+'&password='+this.senha).
        then((res) => {this.mostrar(res.data)}).
        catch(e => console.error(e));
      }
      else{
        this.alerta = this.alerta.replace('ocultar', '');
      }
    },
    clique: function(){
      this.$router.push({name:'CadUsuario'});
    },
    validarEmail: function(){
      var usuario = this.email.substring(0, this.email.indexOf('@'));
      var dominio = this.email.substring(this.email.indexOf('@') + 1, this.email.length);
      if ((usuario.length >=1) &&
      (dominio.length >=3) &&
      (usuario.search("@")==-1) &&
      (dominio.search("@")==-1) &&
      (usuario.search(" ")==-1) &&
      (dominio.search(" ")==-1) &&
      (dominio.search(".")!=-1) &&
      (dominio.indexOf(".") >=1)&&
      (dominio.lastIndexOf(".") < dominio.length - 2)) return true;
      cont = 0;
      this.alertaConteudo = "Email Invalido<br><hr>";
      return false;
    },
    validarSenha: function(){
      var regex = /[0-9]/;
      if(regex.test(this.senha) && this.senha.length >= 8 && this.hasUpper() && this.hasLower()) return true;
      else{
        if(cont === 0){
          this.alertaConteudo += 'Senha Invalida';
          cont++;
        }
        return false;
      }
    },
    hasUpper: function(){
      var i = 0;
      while(i < this.senha.length){
        var caractere = this.senha.charAt(i);
        if(!isNaN(caractere * 1)){
          i++;
          continue;
        }
        if(caractere === caractere.toUpperCase()) return true;
        i++;
      }
      return false;
    },
    hasLower: function(){
      var i = 0;
      while(i < this.senha.length){
        var caractere = this.senha.charAt(i);
        if(!isNaN(caractere * 1)){
          i++;
          continue;
        }
        if(caractere === caractere.toLowerCase()) return true;
        i++;
      }
      return false;
    }
  },
  mounted: function(){
    var nome = "Tarcisio Neto3535@ Araújo";
    if(validar.validarNome(nome))alert("É certo")
    else alert("não é");
    this.$emit('desaparecer');
  }
}
</script>

<style>

  .ocultar{
    display: none;
  }

  @media (max-width: 576px) {
    #form-login{
      width: 90%;
    }
  }

  @media (min-width: 768px) and (max-width: 1199.97px)  {
    #form-login{
      width: 35%;
    }
  }

  @media (min-width: 1199.98px) {
    #form-login{
      width: 25%;
    }
  }

  .cadastrar{
    font-size: 80%;
    color: grey;
  }

  .cadastrar:hover{
    color: rgb(99, 55, 221);
    border-bottom: 2px solid rgb(99, 55, 221);
  }

  .login{
    font-size: 80%;
    padding-left: 0;
    padding-right: 0;
    color: rgb(99, 55, 221);
    border-bottom: 2px solid rgb(99, 55, 221);
  }

  .botao{
    background-color:transparent;
  }

  #form-login{
    margin-right: auto;
    margin-left: auto;
    padding-bottom: 2%;
    border-radius: 0;
    background-color: white;
    padding-right: 1%;
    padding-left: 1%;
  }

  .content{
    height: 100vh;
    background-color: #00008B;
    padding-top: 5%;
  }

  #form-login input[type="button"], #form-login input[type="reset"]{
    color: white;
    background-color: #271c64;
    border: none;
    border-radius: 0;
  }

  #form-login input[type="submit"]:hover, #form-login input[type="reset"]:hover{
    color: white;
    background-color: #4a148c;
  }

  .grupo{
    display: flex;
    justify-content: center;
  }

  #form-login input[type="email"], #form-login input[type="password"]{
    background-color: transparent;
    border-radius: 0;
    border-top: none;
    border-left: none;
    border-right: none;
  }

  .link-usuario a{
    color:rgb(17, 51, 126);
  }

  p, .link-usuario a{
    font-size: 70%;
  }

  a:hover{
    color:rgba(0, 140, 255, 0.397);
    text-decoration: none;
  }

  .link-usuario{
    display: flex;
    justify-content: space-between;
  }
</style>