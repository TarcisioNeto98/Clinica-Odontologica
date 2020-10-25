<template>
    <Tabela v-bind:alterar="false" v-bind:remover="false" v-bind:cadastrar="false" titulo="Dependente"
    v-bind:array="$route.params.array" valor="Funcionário"/>
</template>

<script>
import Tabela from '../../components/Tabela.vue';
export default {
    name: 'ResultadoFuncionario',
    components: {
        Tabela
    }
}
</script>