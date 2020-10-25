<template>
<form class="container">
  <h3 style="text-align: center;" class="mb-3 mt-3">Cadastro de Paciente</h3>
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
  <div class="form-group">
    <label for="inputAddress">Endereço</label>
    <input type="text" v-model="endereco" class="form-control" id="inputAddress" placeholder="Rua dos Bobos, nº 0">
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
      <input type="text" v-model="cep" v-on:click="clique()" class="form-control" id="inputCEP">
    </div>
  </div>
  <button type="button" v-on:click="clique()" class="btn btn-primary btn-lg">Atualizar</button>
</form>
</template>

<script>
export default {
    name: 'AlterarPaciente'
}
</script>