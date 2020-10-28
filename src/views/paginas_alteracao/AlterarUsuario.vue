<template>
<form class="container">
  <h3 style="text-align: center;" class="mb-3 mt-3">Alterar dados do Funcionário {{$route.params.id}}</h3>
  <Alerta v-bind:expor="expor" v-bind:conteudo="alerta"/>
  <div class="form-group">
    <label for="inputNome">Nome</label>
    <input type="text" v-model="nome" class="form-control" id="inputNome" placeholder="Nome">
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email" v-model="email">
    </div>
    <div class="form-group col-md-6">
      <label for="inputAddress">Endereço</label>
      <input type="text" class="form-control" id="inputAddress" placeholder="Rua dos Bobos, nº 0" v-model="endereco">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputCity">Cidade</label>
      <input type="text" class="form-control" id="inputCity" v-model="cidade">
    </div>
    <div class="form-group col-md-4">
      <label for="inputEstado">Estado</label>
      <select id="inputEstado" class="form-control">
        <option selected>{{estado}}</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputCEP">CEP</label>
      <input type="text" class="form-control" id="inputCEP" v-model="cep">
    </div>
    <div class="form-group col-md-2">
      <label for="inputSalario">Salário</label>
      <input type="number" v-model="salario" class="form-control" id="inputSalario"/>
    </div>
  </div>
  <button type="button" class="btn btn-primary btn-lg" v-on:click="alterarFuncionario()">Alterar</button>
</form>
</template>

<script>

import Alerta from '../../components/Alerta.vue';
var validar = require('../../util/validacao');

export default {
  name: 'AlterarUsuario',
  mounted: function(){
    this.$http.get("http://localhost:8095/quatum/api/funcionarios/id/"+this.$route.params.id).then(res => res.data).
    then(data => this.mostrar(data));
  },
  data: function(){
    return {
      id: 0,
      nome: '',
      cidade: '',
      salario: 0,
      cep: '',
      estado: 'CE',
      endereco: '',
      email: '',
      expor: false,
      alerta: ''
    }
  },
  components: {
    Alerta
  },
  methods: {
    mostrar: function(data){
      this.id = data.id;
      this.nome= data.nome;
      this.cidade= data.cidade;
      this.salario= data.salario;
      this.cep= data.cep;
      this.estado= data.estado;
      this.endereco= data.endereco,
      this.email= data.email;
    },
    validarCampos: function(funcao, mensagem, campo){
      //Nome de Procedimento Invalido <hr>
      if(!funcao(campo)){
          if(!this.expor) this.expor = true;
          if(this.alerta.includes(mensagem))
            return false;
          this.alerta += mensagem;
          return false;
      }
      if(this.alerta.includes(mensagem))
        this.alerta = this.alerta.replace(mensagem, "");
      if(this.alerta === '') this.expor = false;
      return true;
    },
    alterarFuncionario: function(){
      if(this.validarCampos(validar.validarNome, "Nome Invalido <hr>", this.nome) 
      && this.validarCampos(validar.validarEmail, "Email Invalido <hr>", this.email) &&   
      this.validarCampos(validar.validarProcedimento, "Nome de cidade Invalido <hr>", this.cidade)&&
      this.validarCampos(validar.validarCep, "CEP Invalido <hr>", this.cep) &&
      this.validarCampos(validar.validarEstado, "Nome de Estado Invalido <hr>", this.estado) &&
      this.validarCampos(validar.validarSalario, "Salario Invalido <hr>", this.salario)){
      
        this.$http.put("http://localhost:8095/quatum/api/funcionarios/", 
        {id: this.id, nome: this.nome, cidade: this.cidade, salario: this.salario, cep: this.cep,
        estado: this.estado, endereco: this.endereco, email: this.email}).
        then(res => res.data).then(data => alert(JSON.stringify(data)));
      
      }
    }
  }
}
</script>