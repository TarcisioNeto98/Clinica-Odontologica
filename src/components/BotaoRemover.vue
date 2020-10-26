<template>
    <input class="btn btn-danger" type="button" value="Remover" v-on:click="removerItem()">
</template>

<script>
export default {
    name: 'BotaoRemover',
    props: ['id', 'remover'],
    methods: {
        removerItem: function(){
            if(this.$props.remover){
                this.$http.delete("http://localhost:8095/quatum/api/pacientes/?id="+this.$props.id)
                .catch(e => console.error(e));
            }
            else{
                this.$http.delete("http://localhost:8095/quatum/api/funcionarios/?id="+this.$props.id)
                .catch(e => console.error(e));
            }
        }
    }
}
</script>