<template>
    <form name="cadDependente" class="container">
        <h2 id="h2personalizado">Cadastrar de Dependente</h2>
        <div class="form-group">
            <label for="idDependente">Nome do Dependente:</label>
            <input type="text" name="nomeDependente" id="idDependente" class="form-control"
            placeholder="Nome do Dependente" v-model="nome">
        </div>
        <div class="form-group">
            <label for="idCpfDependente">CPF:</label>
            <input type="number" name="cpfDependente" id="idCpfDependente" class="form-control"
            placeholder="CPF do Dependente" v-model="cpf">
        </div>
        <div class="form-group">
            <input type="reset" value="Limpar" class="btn btn-secondary">
            <input type="button" value="Cadastrar" class="btn btn-success" v-on:click="cadastrarDependente()">
		</div>   
    </form>
</template>

<script>
export default {
    name: 'CadDependente',
    data: function(){
        return {
            nome: '',
            cpf: ''
        }
    },
    methods: {
        mostrar(data){
            alert(JSON.stringify(data));
        },
        cadastrarDependente(){
            this.$http.post("http://localhost:8090/quatum/api/dependentes/",
            {nome: this.nome, cpf: this.cpf, idFuncionario: this.$route.params.id}).
            then(res => {this.mostrar(res.data)}).catch(e => console.error(e));
        }
    }
}
</script>