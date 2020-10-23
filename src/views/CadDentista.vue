<template>
    <div id="generic" class="container">
        <h2 class="mt-2 mb-2">Cadastrar Dentista</h2>
        <form name="cadDentista">
            <div class="row">
                <div class="form-group col-md-6">
                    <label for="idNome">Nome:</label>
                    <input type="text" name="procedimento" id="idNome" class="form-control 
                    shadow-sm p-3 bg-white rounded" placeholder="Qual o procedimento" v-model="nome">
                </div>
                <div class="form-group col-md-6">
                    <label for="idEspecialidade">Especialidade:</label>
                    <input type="text" name="especialidade" id="idEspecialidade" class="form-control 
                    shadow-sm p-3 bg-white rounded" placeholder="Informe a especialidade" v-model="especialidade">
                </div>
            </div>
            <div class="form-group">
                <input type="reset" value="Limpar" id="resetar" class="btn btn-secondary mr-2">
                <input type="button" value="Cadastrar" id="submeter" class="btn btn-success" v-on:click="clique()">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'CadDentista',
    data: function(){
        return {
            nome: '',
            especialidade: ''
        }
    },
    methods: {
      mostrar:function(data){
        alert(JSON.stringify(data));
      },
      clique: function(){
        this.$http.post('http://localhost:8090/quatum/api/dentistas/',
          {nome: this.nome, especialidade: this.especialidade}
        ).then((res) => {this.mostrar(res.data)}).
        catch(e => console.error(e));
      }
    }
}
</script>
