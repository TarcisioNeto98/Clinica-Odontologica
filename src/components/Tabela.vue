<template>
<table class="table table-striped container mt-5">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Nome</th>
      <th scope="col">Remover</th>
      <th scope="col">Cadastrar</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="obj in array" v-bind:key="obj.id">
      <th scope="row">{{obj.id}}</th>
      <td>{{obj.nome}}</td>
      <td>Remover</td>
      <td><BotaoCadastrar v-bind:id="obj.id" v-bind:cadastrar="titulo"/></td>
    </tr>
  </tbody>
</table>
</template>

<script>
import BotaoCadastrar from '../components/BotaoCadastrar.vue';

export default{
    name: 'Tabela',
    components: {
        BotaoCadastrar
    },
    props:['titulo', 'array'],
    data: function(){
        return {
            id: '2'
        }
    }
}
</script>