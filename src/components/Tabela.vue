<template>
<table class="table table-striped container mt-5">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Nome</th>
      <th scope="col">Remover</th>
      <th scope="col">Cadastrar</th>
      <th scope="col">Alterar</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="obj in array" v-bind:key="obj.id">
      <th scope="row">{{obj.id}}</th>
      <td>{{obj.nome}}</td>
      <td><BotaoRemover v-on:recarregar="repassarEvento()" v-bind:remover="remover" v-bind:id="obj.id"/></td>
      <td><BotaoCadastrar v-bind:cadastrarItem="cadastrar" v-bind:id="obj.id" v-bind:cadastrar="titulo"/></td>
      <td><BotaoAlterar v-bind:alterar="alterar" v-bind:valor="valor" v-bind:id="obj.id"/></td>
    </tr>
  </tbody>
</table>
</template>

<script>
import BotaoCadastrar from '../components/BotaoCadastrar.vue';
import BotaoRemover from '../components/BotaoRemover.vue';
import BotaoAlterar from '../components/BotaoAlterar.vue';

export default{
    name: 'Tabela',
    components: {
        BotaoCadastrar,
        BotaoRemover,
        BotaoAlterar
    },
    props:['titulo', 'array', 'remover', 'cadastrar', 'alterar', 'valor'],
    data: function(){
        return {
            id: '2'
        }
    },
    methods:{
      repassarEvento: function(){
        this.$emit("carregarTabela");
      }
    }
}
</script>