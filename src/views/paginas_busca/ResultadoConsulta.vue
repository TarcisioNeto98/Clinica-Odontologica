<template>
<div>
    <table class="table table-striped container mt-5">
        <thead class="thead-dark">
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Data</th>
            <th scope="col">Valor</th>
            <th scope="col">Remover</th>
            <th scope="col">Alterar</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="obj in $route.params.array" v-bind:key="obj.id">
            <th scope="row">{{obj.id}}</th>
            <td>{{obj.data}}</td>
            <td>{{obj.valor}}</td>
            <td><BotaoRemover consulta="consulta" v-bind:id="obj.id"/></td>
            <td><BotaoAlterar valor="consulta" consulta="consulta" v-bind:id="obj.id"/></td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import BotaoRemover from '../../components/BotaoRemover.vue';
import BotaoAlterar from '../../components/BotaoAlterar.vue';

export default{
    name: 'ResultadoConsulta',
    components: {
        BotaoRemover,
        BotaoAlterar
    },
    props:['array'],
    data: function(){
        return {
            id: '2'
        }
    }
}
</script>

<style>
    #titulo{
        margin-left: auto;
        margin-right: auto;
    }
</style>