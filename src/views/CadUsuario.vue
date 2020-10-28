<template>
<div id="form-usuario">
<form class="container form-usuario rounded-0">
  <div class="btn-group mb-4" role="group" aria-label="Exemplo básico">
    <button name="login" type="button" v-on:click="toHome"
    class="btn botao text-uppercase font-weight-bold mr-4 login-cadastrar">
    Login</button>
    <button name="cadastro" type="button" class="btn botao text-uppercase font-weight-bold cadastrar1">
    Cadastrar</button>
  </div>
  <div v-bind:class="alerta" role="alert">
    <span v-html="alertaConteudo"></span>
  </div>
  <div class="form-group">
    <label for="inputNome">Nome</label>
    <input required v-model="nome" type="text" class="form-control" id="inputNome" placeholder="Digite seu nome">
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input v-model="email" type="email" class="form-control" id="inputEmail4" placeholder="Email">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Senha</label>
      <input v-model="senha" type="password" class="form-control" id="inputPassword4" placeholder="Senha">
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Endereço</label>
    <input required v-model="endereco" type="text" class="form-control" id="inputAddress" placeholder="Rua dos Bobos, nº 0">
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">Cidade</label>
      <input v-model="cidade" type="text" class="form-control" id="inputCity" required>
    </div>
    <div class="form-group col-md-4">
      <label for="inputEstado">Estado</label>
      <select id="inputEstado" class="form-control" required>
        <option selected>Escolher...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputCEP">CEP</label>
      <input v-model="cep" type="text" class="form-control" id="inputCEP">
    </div>
  </div>
  <button id="botaoUsuario" v-on:click = "clique" type="button" class="btn btn-primary btn-lg">Entrar</button>
</form>
</div>
</template>

<script>
var cont = 0, contCep = 0;
export default {
    name: 'CadUsuario',
    data: function(){
      return {
        nome: '',
        email: '',
        senha: '',
        alertaConteudo: '',
        endereco: '',
        cidade: '',
        cep: '',
        alerta: 'alert alert-danger ocultar',
        users: null
      }
    },
    methods:{
      mostrar: function(data){
        this.users = data;
        if(data.id === -1){
          alert("Senha já existe!");
          return;
        }
        this.$emit('aparecer');
        this.$router.push({name: 'Home', params: {id: this.users.id, email: this.users.email}});
      },
      clique: function(){
        if(this.validarCadastro()){
          this.$http.post('http://localhost:8095/quatum/api/users/',
            {email: this.email,nome: this.nome, password: this.senha, endereco: this.endereco, cep: this.cep, cidade: this.cidade, estado: 'ce'}
          ).then((res) => {
            if(res.status === 201) this.mostrar(res.data);
          }).
          catch((e) => {
            if(e.response.status === 403) alert("Dados preenchidos inadequadamente!");
            else alert("Erro no servidor, não é possivel cadastrar!");
          });
        }
        else{
          this.alerta = this.alerta.replace('ocultar', '');
        }
      },
      toHome: function(){
        this.$router.push({name: 'Login'});
      },
      validarCep: function(){
        if(this.cep.length === 8) return true;
        if(contCep == 0){
          this.alertaConteudo += 'Cep Invalido<br><hr>';
          contCep++;
        }
        return false
      },
      validarCadastro: function(){
        if(this.validarEmail() && this.validarSenha() && this.validarCep()) return true;
        return false;
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
        this.contCep = 0;
        this.alertaConteudo = "Email Invalido<br><hr>";
        return false;
    },
    validarSenha: function(){
      var regex = /[0-9]/;
      if(regex.test(this.senha) && this.senha.length >= 8 && this.hasUpper() && this.hasLower()) return true;
      else{
        if(cont === 0){
          this.alertaConteudo += 'Senha Invalida<br><hr>';
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
      this.$emit('desaparecer');
    }
}
</script>

<style>

  .ocultar{
    display: none;
  }

  #botaoUsuario{
    color: white;
    background-color: #271c64;
    border: none;
    border-radius: 0;
  }

  #botaoUsuario:hover{
    color: white;
    background-color: #4a148c;
  }

  #form-usuario{
    height: 100vh;
    background-color: #00008B;
    padding-top: 5%;
  }

  .cadastrar1{
    color: rgb(99, 55, 221);
    border-bottom: 2px solid rgb(99, 55, 221);
  }

  .cadastrar1, .login-cadastrar{
    font-size: 80%;
    padding-left: 0;
    padding-right: 0;
  }

  .login-cadastrar:hover{
    color: rgb(99, 55, 221);
    border-bottom: 2px solid rgb(99, 55, 221);
  }

  .login-cadastrar{
    color: grey;
  }

  .form-usuario{
    background-color: white;
    padding: 2%;
  }

</style>