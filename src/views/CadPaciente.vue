<template>
<form class="container">
  <h3 style="text-align: center;" class="mb-3 mt-3">Cadastro de Paciente</h3>
  <Alerta v-bind:expor="expor" v-bind:conteudo="alerta"/>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" v-model="email" class="form-control" id="inputEmail4" placeholder="Email">
    </div>
    <div class="form-group col-md-6">
        <label for="idCpf">Nome</label>
        <input type="text" v-model="nome" name="nomePaciente" id="idNome" class="form-control" placeholder="Informe o nome do paciente">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">Cidade</label>
      <input type="text" v-model="cidade" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-4">
      <label for="inputEstado">Estado</label>
      <select id="inputEstado" class="form-control">
        <option selected>Escolher...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputCEP">CEP</label>
      <input type="text" v-model="cep" class="form-control" id="inputCEP">
    </div>
  </div>
  <button type="button" v-on:click="clique()" class="btn btn-primary btn-lg">Cadastrar</button>
</form>
</template>

<script>
var validar = require('../util/validacao');
import Alerta from '../components/Alerta.vue';
export default {
    data: function(){
        return {
            nome: '',
            email: '',
            cidade: '',
            cep: '',
            estado: 'CE',
            expor: false,
            alerta: ''
        }
    },
    components:{
      Alerta
    },
    name: 'CadPaciente',
    methods: {
      mostrar:function(data){
        alert(JSON.stringify(data));
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
      clique: function(){
        if(this.validarCampos(validar.validarNome, "Nome Invalido <hr>", this.nome) 
        && this.validarCampos(validar.validarEmail, "Email Invalido <hr>", this.email) && 
        this.validarCampos(validar.validarProcedimento, "Nome de cidade Invalido <hr>", this.cidade)&&
        this.validarCampos(validar.validarCep, "CEP Invalido <hr>", this.cep) &&
        this.validarCampos(validar.validarEstado, "Nome de Estado Invalido <hr>", this.estado)){
          
          this.$http.post('http://localhost:8095/quatum/api/pacientes/',
          {nome: this.nome, email: this.email, cidade: this.cidade, cep: this.cep, estado: 'CE'}
          ).then((res) => {
            if(res.status === 201) this.mostrar(res.data);
          }).
          catch((e) => {
            if(e.response.status === 401) alert("Preencha os dados adequadamante!");
            else alert("Não foi possivel cadastrar paciente!");
          });
        }
      }
    }
}
</script>