<template>
<form class="container">
  <h3 style="text-align: center;" class="mb-3 mt-3">Alterar dados do Funcionário {{$route.params.id}}</h3>
  <div class="form-group">
    <label for="inputNome">Nome</label>
    <input type="text" v-model="nome" class="form-control" id="inputNome" placeholder="Nome">
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email" v-model="email">
    </div>
    <div class="form-group col-md-6">
      <label for="inputAddress">Endereço</label>
      <input type="text" class="form-control" id="inputAddress" placeholder="Rua dos Bobos, nº 0" v-model="endereco">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputCity">Cidade</label>
      <input type="text" class="form-control" id="inputCity" v-model="cidade">
    </div>
    <div class="form-group col-md-4">
      <label for="inputEstado">Estado</label>
      <select id="inputEstado" class="form-control">
        <option selected>{{estado}}</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputCEP">CEP</label>
      <input type="text" class="form-control" id="inputCEP" v-model="cep">
    </div>
    <div class="form-group col-md-2">
      <label for="inputSalario">Salário</label>
      <input type="number" v-model="salario" class="form-control" id="inputSalario"/>
    </div>
  </div>
  <button type="button" class="btn btn-primary btn-lg" v-on:click="alterarFuncionario()">Alterar</button>
</form>
</template>

<script>
export default {
  name: 'AlterarUsuario',
  mounted: function(){
    this.$http.get("http://localhost:8090/quatum/api/funcionarios/id/"+this.$route.params.id).then(res => res.data).
    then(data => this.mostrar(data));
  },
  data: function(){
    return {
      id: 0,
      nome: '',
      cidade: '',
      salario: 0,
      cep: '',
      estado: 'CE',
      endereco: '',
      email: ''
    }
  },
  methods: {
    mostrar: function(data){
      this.id = data.id;
      this.nome= data.nome;
      this.cidade= data.cidade;
      this.salario= data.salario;
      this.cep= data.cep;
      this.estado= data.estado;
      this.endereco= data.endereco,
      this.email= data.email;
    },
    alterarFuncionario: function(){
      this.$http.put("http://localhost:8090/quatum/api/funcionarios/", 
      {id: this.id, nome: this.nome, cidade: this.cidade, salario: this.salario, cep: this.cep,
      estado: this.estado, endereco: this.endereco, email: this.email}).
      then(res => res.data).then(data => alert(JSON.stringify(data)));
    }
  }
}
</script>