<template>
    <form class="container">
        <h3 style="text-align: center;" class="mb-3 mt-3">Cadastro de Funcionário</h3>
        <Alerta v-bind:expor="expor" v-bind:conteudo="alerta"/>
        <div class="form-group">
            <label for="inputNome">Nome</label>
            <input type="text" v-model="nome" class="form-control" id="inputNome" placeholder="Nome">
        </div>
        <div class="form-group">
            <label for="inputEmail">Email</label>
            <input v-model="email" type="text" class="form-control" id="inputEmail" placeholder="Digite seu email">
        </div>
        <div class="form-group">
            <label for="inputAddress">Endereço</label>
            <input v-model="endereco" type="text" class="form-control" id="inputAddress" placeholder="Digite seu endereco">
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
                <input type="number" v-model="cep" class="form-control" id="inputCEP">
            </div>
            <div class="form-group">
                <label for="inputSalario">Salário</label>
                <input type="number" v-model="salario" class="form-control" id="inputSalario"/>
            </div>
        </div>
        <button type="button" v-on:click="clique()" class="btn btn-primary btn-lg">Cadastrar</button>
    </form>
</template>

<script>
import Alerta from '../components/Alerta.vue';
var validar = require('../util/validacao');

export default {
    data: function(){
        return {
            nome: '',
            cidade: '',
            salario: '',
            cep: '',
            estado: 'CE',
            endereco: '',
            email: '',
            expor: false,
            alerta: ''
        }
    },
    name: 'CadFuncionario',
    components: {
        Alerta
    },
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
        this.validarCampos(validar.validarEstado, "Nome de Estado Invalido <hr>", this.estado) &&
        this.validarCampos(validar.validarSalario, "Salario Invalido <hr>", this.salario)){
            alert("Campos validos");
        }
        /*this.$http.post('http://localhost:8095/quatum/api/funcionarios/',
          {nome: this.nome, email: this.email, endereco: this.endereco, cidade: this.cidade, cep: this.cep, estado: 'CE', salario: this.salario}
        ).then((res) => {
            if(res.status === 201) this.mostrar(res.data);
        }).catch(e => {
            if(e.response.status === 401) alert("Campos preenchidos inadequadamente!");
            else alert("Erro ao cadastrar funcionário!");
        });*/
      }
    }
}
</script>