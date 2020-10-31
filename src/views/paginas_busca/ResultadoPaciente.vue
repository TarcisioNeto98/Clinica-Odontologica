<template>
    <Tabela v-bind:alterar="true" v-bind:remover="true" v-bind:cadastrar="true" 
    v-bind:array="array" titulo="Consulta" valor="Paciente" v-on:carregarTabela="reload()"/>
</template>

<script>
import Tabela from '../../components/Tabela.vue';
export default {
    name: 'ResultadoPaciente',
    components: {
        Tabela
    },
    data: function(){
        return {
            array: this.$route.params.array
        }
    },
    methods: {
        reload(){
            this.$http.get("http://localhost:8095/quatum/api/pacientes/?email="+this.$route.params.email+'&nome='+this.$route.params.nome).
            then(res => this.array=res.data);
        }
    }
}
</script>