<template>
<Busca titulo="Busca de Funcionário" v-bind:tipoUrl="false"/>
</template>

<script>
import Busca from '../../components/Busca.vue';
export default {
    name:'BuscarUsuario',
    components: {
        Busca
    }
}
</script>