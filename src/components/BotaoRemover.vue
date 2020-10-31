<template>
    <input class="btn btn-danger" type="button" value="Remover" v-on:click="removerItem()">
</template>

<script>
export default {
    name: 'BotaoRemover',
    props: ['id', 'remover', 'consulta'],
    methods: {
        removerItem: function(){
            if(this.$props.consulta === 'consulta'){
                this.$http.delete("http://localhost:8095/quatum/api/consultas/"+this.$props.id).
                then((res) => {
                    if(res.status === 200) this.$emit('recarregar');
                }).catch((error) => {
                    if(error.response.status === 401) alert("Consulta não encontrada!");
                    else alert("Erro no servidor!");
                });
            }
            else if(this.$props.remover){
                this.$http.delete("http://localhost:8095/quatum/api/pacientes/?id="+this.$props.id).
                then((res) => {
                    if(res.status === 200){
                        this.$emit('recarregar');
                    }
                }).catch((e) => {
                    if(e.response.status === 401) alert("Usuário não encontrado!");
                    else alert("erro no servidor!");
                });
            }
            else{
                this.$http.delete("http://localhost:8095/quatum/api/funcionarios/?id="+this.$props.id).
                then((res) => {
                    if(res.status === 200){
                        this.$emit('recarregar');
                    }
                }).catch((e) => {
                    if(e.response.status === 401) alert("Usuario não encontrado!");
                    else alert("erro no servidor!");
                });
            }
        }
    }
}
</script>