<template>
    <input class="btn btn-success" type="button" v-bind:value="cadastrar" v-on:click="clique()">
</template>

<script>
export default {
    name: 'BotaoCadastrar',
    props: ['id', 'cadastrar'],
    methods: {
        clique: function(){
            this.$router.push({name: 'CadConsulta', params: {id: this.$props.id}});
        }
    }
}
</script>