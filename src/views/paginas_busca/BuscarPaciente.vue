<template>
<Busca titulo="Busca de Paciente" v-bind:tipoUrl="true"/>
</template>

<script>
import Busca from '../../components/Busca.vue';
export default {
    name:'BuscarPaciente',
    components: {
        Busca
    }
}
</script>