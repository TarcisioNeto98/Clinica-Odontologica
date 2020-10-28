<template>
    <div id="generic" class="container">
        <h2 class="mt-2 mb-2">Cadastrar Dentista</h2>
        <Alerta v-bind:expor="expor" v-bind:conteudo="alerta"/>
        <form name="cadDentista">
            <div class="row">
                <div class="form-group col-md-6">
                    <label for="idNome">Nome:</label>
                    <input type="text" name="procedimento" id="idNome" class="form-control 
                    shadow-sm p-3 bg-white rounded" placeholder="Qual o procedimento" v-model="nome">
                </div>
                <div class="form-group col-md-6">
                    <label for="idEspecialidade">Especialidade:</label>
                    <input type="text" name="especialidade" id="idEspecialidade" class="form-control 
                    shadow-sm p-3 bg-white rounded" placeholder="Informe a especialidade" v-model="especialidade">
                </div>
            </div>
            <div class="form-group">
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
    name: 'CadDentista',
    data: function(){
        return {
            nome: '',
            especialidade: '',
            alerta: '',
            expor: false
        }
    },
    components:{
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
        if(this.validarCampos(validar.validarNome, "Nome Invalido <hr>", this.nome) &&
        this.validarCampos(validar.validarProcedimento, "Especialidade Invalida <hr>", this.especialidade)){
            this.$http.post('http://localhost:8095/quatum/api/dentistas/',
            {nome: this.nome, especialidade: this.especialidade}
            ).then((res) => {
                if(res.status === 201) this.mostrar(res.data)
            }).
            catch((e) => {
                if(e.response.status === 401) alert("Campos invalidos");
                else alert("Erro ao cadastrar dentista!");
            });
        }
      }
    }
}
</script>
