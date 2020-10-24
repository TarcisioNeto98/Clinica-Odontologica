<template>
    <input class="btn btn-success" type="button" v-bind:value="cadastrar" v-on:click="clique()">
</template>

<script>
export default {
    name: 'BotaoCadastrar',
    props: ['id', 'cadastrar', 'cadastrarItem'],
    methods: {
        clique: function(){
            if(this.$props.cadastrarItem) this.$router.push({name: 'CadConsulta', params: {id: this.$props.id}});
            else this.$router.push({name: 'CadDependente', params: {id: this.$props.id}});
        }
    }
}
</script>