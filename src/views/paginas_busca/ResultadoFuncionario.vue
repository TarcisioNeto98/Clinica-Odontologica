<template>
    <Tabela v-bind:remover="false" v-bind:cadastrar="false" titulo="Dependente" v-bind:array="$route.params.array"/>
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