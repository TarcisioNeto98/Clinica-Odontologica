<template>
    <Tabela v-bind:alterar="false" v-bind:remover="false" v-bind:cadastrar="false" titulo="Dependente"
    v-bind:array="array" valor="Funcionário" v-on:carregarTabela="reload()"/>
</template>

<script>
import Tabela from '../../components/Tabela.vue';
export default {
    name: 'ResultadoFuncionario',
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
            this.$http.get("http://localhost:8095/quatum/api/funcionarios/?email="+this.$route.params.email+'&nome='+this.$route.params.nome).
            then(res => this.array=res.data);
        }
    }
}
</script>