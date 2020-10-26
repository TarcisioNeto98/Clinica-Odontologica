<template>
    <form class="container">
        <h3 style="text-align: center;" class="mb-3 mt-3">Cadastro de Funcionário</h3>
        <div class="form-group">
            <label for="inputNome">Nome</label>
            <input type="text" v-model="nome" class="form-control" id="inputNome" placeholder="Nome">
        </div>
        <div class="form-group">
            <label for="inputEmail">Email</label>
            <input v-model="email" type="text" class="form-control" id="inputEmail" placeholder="Digite seu email">
        </div>
        <div class="form-group">
            <label for="inputAddress">Endereço</label>
            <input v-model="endereco" type="text" class="form-control" id="inputAddress" placeholder="Digite seu endereco">
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
            cidade: '',
            salario: '',
            cep: '',
            estado: 'CE',
            endereco: '',
            email: ''
        }
    },
    name: 'CadFuncionario',
    methods: {
      mostrar:function(data){
        alert(JSON.stringify(data));
      },
      clique: function(){
        this.$http.post('http://localhost:8095/quatum/api/funcionarios/',
          {nome: this.nome, email: this.email, endereco: this.endereco, cidade: this.cidade, cep: this.cep, estado: 'CE', salario: this.salario}
        ).then((res) => {this.mostrar(res.data)}).
        catch(e => console.error(e));
      }
    }
}
</script>