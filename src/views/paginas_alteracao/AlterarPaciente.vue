<template>
<form class="container">
  <h3 style="text-align: center;" class="mb-3 mt-3">Alterar Paciente {{this.id}}</h3>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" v-model="email" class="form-control" id="inputEmail4" placeholder="Email">
    </div>
    <div class="form-group col-md-6">
        <label for="idCpf">Nome</label>
        <input type="text" v-model="nome" name="nomePaciente" id="idNome" class="form-control" placeholder="Informe o nome do paciente">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">Cidade</label>
      <input type="text" v-model="cidade" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-4">
      <label for="inputEstado">Estado</label>
      <select id="inputEstado" class="form-control" v-model="estado">
        <option selected>{{this.estado}}</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputCEP">CEP</label>
      <input type="text" v-model="cep" v-on:click="clique()" class="form-control" id="inputCEP">
    </div>
  </div>
  <button type="button" v-on:click="atualizar()" class="btn btn-primary btn-lg">Atualizar</button>
</form>
</template>

<script>
export default {
    name: 'AlterarPaciente',
    mounted: function(){
      this.$http.get("http://localhost:8095/quatum/api/pacientes/id/"+this.$route.params.id).then(res => res.data).
      then(data => this.mostrar(data));
    },
    data: function(){
        return {
          id: 0,
          email: '',
          nome: '',
          cep: '',
          estado: 'ce',
          endereco: '',
          cidade: ''
        }
    },
    methods: {
      mostrar(data){
        this.id = data.id;
        this.email = data.email;
        this.nome = data.nome;
        this.cep = data.cep;
        this.estado = data.estado;
        this.cidade = data.cidade;
      },
      atualizar(){
        this.$http.put('http://localhost:8095/quatum/api/pacientes/', 
        {id: this.id, email: this.email, nome: this.nome, cep: this.cep,
        estado: this.estado, cidade: this.cidade}).
        then((res) => {
          if(res.status === 201) alert(JSON.stringify(res.data));
        }).catch((error) => {
          if(error.response.status === 401) alert("Preencha os dados corretamente!");
          else alert("Erro ao atualizar!");
        });
      }
    }
}
</script>