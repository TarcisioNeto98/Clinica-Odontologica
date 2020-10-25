<template>
    <input class="btn btn-warning" type="button" v-bind:value="valor" v-on:click="alterarEntidade()">
</template>

<script>
export default {
    name: 'BotaoAlterar',
    props: ['valor', 'alterar', 'id'],
    methods: {
        alterarEntidade: function(){
            if(this.$props.alterar) this.$router.push({name: 'AlterarPaciente', params: {id: this.$props.id}});
            else this.$router.push({name: 'AlterarUsuario', params: {id: this.$props.id}});
        }
    }
}
</script>