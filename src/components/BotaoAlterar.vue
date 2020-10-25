<template>
    <input class="btn btn-warning" type="button" v-bind:value="titulo" v-on:click="alterar()">
</template>

<script>
export default {
    name: 'BotaoAlterar',
    props: ['titulo', 'entidade'],
    methods: {
        alterar: function(){
            if(this.$props.entidade){}
            else {}
        }
    }
}
</script>