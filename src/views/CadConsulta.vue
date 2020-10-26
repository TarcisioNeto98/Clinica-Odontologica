<template>
    <div id="generic" class="container">
        <form name=cadConsulta>
          <h2>Cadastrar Consulta</h2>
          <div class="row">
            <div class="form-group col-md-4">
                <label for="idValorConsulta">Valor:</label>
                <input type="number" name="valorConsulta" id="idValorConsulta" 
                class="form-control" placeholder="Informe o valor da consulta" v-model="valor">
            </div>
            <div class="form-group col-md-5">
              <label for="idDentista">Dentista:</label>
              <select id="idDentista" v-model="selecionado" class="form-control">
                <option disabled value="">Escolha um item</option>
                <option v-for="dentista in dentistas" v-bind:key="dentista.id">{{dentista.id}} {{dentista.nome}}</option>
              </select>
            </div>
            <div class="form-group col-md-3">
              <label for="idData">Data:</label>
                <input type="date" name="data" id="idData" 
                class="form-control" v-model="data">
            </div>
          </div>
            <div id="botoes">
              <input id = "limpar" type="reset" value="Limpar" class="btn btn-secondary" style="margin-right:2%;">
              <input id = "submeter" type="button" v-on:click="clique()" value="Cadastrar" class="btn btn-success">
          </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'CadConsulta',
    data: function(){
      return {
        valor: '',
        selecionado: '',
        dentistas: null,
        data: ''
      }
    },
    created: function(){
      this.$http.get("http://localhost:8095/quatum/api/dentistas/").then((res) => {this.dentistas = res.data});
    },
    methods:{
      mostrar:function(data){
        alert(JSON.stringify(data));
      },
      clique: function(){
        this.selecionado = this.selecionado.replace(/\D/gim, '');
        this.$http.post('http://localhost:8095/quatum/api/consultas/', 
        {valor: this.valor, data: this.data, idPaciente: this.$route.params.id, idDentista: this.selecionado})
        .then((res) => {this.mostrar(res.data)}).
        catch(e => console.error(e));
      }
    }
}
</script>

<style>
</style>