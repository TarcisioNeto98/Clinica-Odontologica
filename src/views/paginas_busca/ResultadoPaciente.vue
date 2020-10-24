<template>
    <Tabela v-bind:remover="true" v-bind:cadastrar="true" v-bind:array="$route.params.array" titulo="Consulta"/>
</template>

<script>
import Tabela from '../../components/Tabela.vue';
export default {
    name: 'ResultadoPaciente',
    components: {
        Tabela
    }
}
</script>