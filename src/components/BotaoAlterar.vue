<template>
    <input class="btn btn-warning" type="button" v-bind:value="valor" v-on:click="alterarEntidade()">
</template>

<script>
export default {
    name: 'BotaoAlterar',
    props: ['valor', 'alterar', 'id', 'consulta'],
    methods: {
        alterarEntidade: function(){
            if(this.$props.consulta === "consulta") this.$router.push({name: 'AlterarConsulta', params: {id: this.$props.id}});
            else if(this.$props.alterar) this.$router.push({name: 'AlterarPaciente', params: {id: this.$props.id}});
            else this.$router.push({name: 'AlterarUsuario', params: {id: this.$props.id}});
        }
    }
}
</script>