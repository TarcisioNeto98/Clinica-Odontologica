<template>
    <div id="generic" class="container">
        <h2 class="mt-2 mb-2">Cadastrar Novo Procedimento</h2>
        <form name="cadProcedimento">
            <Alerta v-bind:expor="expor" v-bind:conteudo="alerta"/>
            <div class="row">
                <div class="form-group col-md-6">
                    <label for="idProcedimento">Nome:</label>
                    <input type="text" name="procedimento" id="idProcedimento" class="form-control 
                    shadow-sm p-3 bg-white rounded" placeholder="Qual o procedimento" v-model="nome">
                    <small>Minimo de 10 carateres</small>
                </div>
                <div class="form-group col-md-6">
                    <label for="idValorProcedimento">Valor do Procedimento:</label>
                    <input type="number" name="valorProcedimento" id="idValorProcedimento" class="form-control 
                    shadow-sm p-3 bg-white rounded" placeholder="Informe o valor do procedimento" v-model="valor">
                    <small>Valor numerico</small>
                </div>
            </div>
            <div class="form-group">
                <label for="idDescricao">Descricao:</label>
                <textarea style="resize:none;" id = "idDescricao" name="descricao" class="form-control 
                shadow-sm p-3 bg-white rounded" placeholder="Descreva o procedimento" v-model="descricao"></textarea>
                <small>Minimo de 10 carateress</small>
            </div>
            <div class="form-group m-a">
                <input type="reset" value="Limpar" id="resetar" class="btn btn-secondary mr-2">
                <input type="button" value="Cadastrar" id="submeter" class="btn btn-success" v-on:click="clique()">
            </div>
        </form>
    </div>
</template>

<script>
var validar = require('../util/validacao');
import Alerta from '../components/Alerta.vue';

export default {
    name: 'CadProcedimento',
    data: function(){
        return {
            nome: '',
            valor: '',
            descricao: '',
            alerta: '',
            expor: false
        }
    },
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
      validarProcedimento: function(){
          if(!validar.validarProcedimento(this.nome)){
              if(!this.expor) this.expor = true;
              if(this.alerta.includes("Nome de Procedimento Invalido <hr>"))
                return false;
              this.alerta += "Nome de Procedimento Invalido <hr>";
              return false;
          }
          if(this.alerta.includes("Nome de Procedimento Invalido <hr>"))
            this.alerta = this.alerta.replace("Nome de Procedimento Invalido <hr>", "");
          if(this.alerta === '') this.expor = false;
          return true;
      },
      clique: function(){
        if(this.validarCampos(validar.validarProcedimento, "Nome de Procedimento Invalido <hr>", 
        this.nome) && this.validarCampos(validar.validarSalario, "Valor de Procedimento Invalido <hr>",
        this.valor) && this.validarCampos(validar.validarProcedimento, "Descrição de Procedimento Invalido <hr>", this.descricao)){
          this.$http.post('http://localhost:8095/quatum/api/procedimentos/',
          {nome: this.nome, valor: this.valor, descricao: this.descricao}
          ).then((res) => {
                if(res.status === 201) this.mostrar(res.data);
            }).
            catch((e) => {
                if(e.response.status === 401) alert("Preencha os dados corretamente!");
                else alert("Erro ao cadastrar procedimento, Tente novamente!");
          });  
        }
        /*this.$http.post('http://localhost:8095/quatum/api/procedimentos/',
          {nome: this.nome, valor: this.valor, descricao: this.descricao}
        ).then((res) => {
            if(res.status === 201) this.mostrar(res.data);
        }).
        catch((e) => {
            if(e.response.status === 401) alert("Preencha os dados corretamente!");
            else alert("Erro ao cadastrar procedimento, Tente novamente!");
        });*/
      }
    }
}
</script>

<style>
</style>