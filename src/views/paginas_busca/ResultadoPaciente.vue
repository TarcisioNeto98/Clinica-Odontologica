<template>
    <Tabela v-bind:alterar="true" v-bind:remover="true" v-bind:cadastrar="true" 
    v-bind:array="$route.params.array" titulo="Consulta" valor="Paciente"/>
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