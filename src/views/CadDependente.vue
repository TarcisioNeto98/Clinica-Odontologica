<template>
    <form name="cadDependente" class="container">
        <h2 id="h2personalizado">Cadastrar de Dependente</h2>
        <Alerta v-bind:expor="expor" v-bind:conteudo="alerta"/>
        <div class="form-group">
            <label for="idDependente">Nome do Dependente:</label>
            <input type="text" name="nomeDependente" id="idDependente" class="form-control"
            placeholder="Nome do Dependente" v-model="nome">
        </div>
        <div class="form-group">
            <label for="idCpfDependente">CPF:</label>
            <input type="number" name="cpfDependente" id="idCpfDependente" class="form-control"
            placeholder="CPF do Dependente" v-model="cpf">
        </div>
        <div class="form-group">
            <input type="reset" value="Limpar" class="btn btn-secondary mr-2">
            <input type="button" value="Cadastrar" class="btn btn-success" v-on:click="cadastrarDependente()">
		</div>   
    </form>
</template>

<script>
var validar = require('../util/validacao');
import Alerta from '../components/Alerta.vue';

export default {
    name: 'CadDependente',
    components:{
        Alerta
    },
    data: function(){
        return {
            nome: '',
            cpf: '',
            expor: false,
            alerta: ''
        }
    },
    methods: {
        mostrar(data){
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
        cadastrarDependente(){
            if(this.validarCampos(validar.validarNome, "Nome Invalido <hr>", this.nome) &&
            this.validarCampos(validar.validarCpf, "CPF Invalida <hr>", this.cpf)){
                this.$http.post("http://localhost:8095/quatum/api/dependentes/",
                {nome: this.nome, cpf: this.cpf, idFuncionario: this.$route.params.id}).
                then((res) => {
                    if(res.status === 201) this.mostrar(res.data);
                }).catch(e => {
                    if(e.response.status === 401) alert("Campos invalidos!");
                    else alert("Erro ao cadastrar dependente!");
                });
            }
            
        }
    }
}
</script>