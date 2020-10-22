<template>
    <form class="container">
        <h3 style="text-align: center;" class="mb-3 mt-3">Cadastro de Usuário</h3>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input v-model="email" type="email" class="form-control" id="inputEmail4" placeholder="Email">
            </div>
            <div class="form-group col-md-6">
                <label for="inputNome">Nome</label>
                <input type="text" v-model="nome" class="form-control" id="inputNome" placeholder="Nome">
            </div>
        </div>
        <div class="form-group">
            <label for="inputAddress">Endereço</label>
            <input v-model="endereco" type="text" class="form-control" id="inputAddress" placeholder="Rua dos Bobos, nº 0">
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputCity">Cidade</label>
                <input type="text" v-model="cidade" class="form-control" id="inputCity">
            </div>
            <div class="form-group col-md-4">
            <label for="inputEstado">Estado</label>
            <select id="inputEstado" class="form-control">
                <option selected>Escolher...</option>
                <option>...</option>
            </select>
            </div>
            <div class="form-group col-md-2">
                <label for="inputCEP">CEP</label>
                <input type="number" v-model="cep" class="form-control" id="inputCEP">
            </div>
            <div class="form-group">
                <label for="inputSalario">Salário</label>
                <input type="number" v-model="salario" class="form-control" id="inputSalario"/>
            </div>
        </div>
        <button type="button" v-on:click="clique()" class="btn btn-primary btn-lg">Cadastrar</button>
    </form>
</template>

<script>
export default {
    data: function(){
        return {
            nome: '',
            email: '',
            cidade: '',
            salario: '',
            cep: '',
            estado: 'CE'
        }
    },
    name: 'CadFuncionario',
    methods: {
      mostrar:function(data){
        alert(JSON.stringify(data));
      },
      clique: function(){
        this.$http.post('http://localhost:8081/quatum/api/funcionarios/',
          {nome: this.nome, cidade: this.cidade, cep: this.cep, estado: this.estado}
        ).then((res) => {this.mostrar(res.data)}).
        catch(e => console.error(e));
      }
    }
}
</script>