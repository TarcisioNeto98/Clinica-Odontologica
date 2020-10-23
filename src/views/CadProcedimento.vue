<template>
    <div id="generic" class="container">
        <h2 class="mt-2 mb-2">Cadastrar Novo Procedimento</h2>
        <form name="cadProcedimento">
            <div class="row">
                <div class="form-group col-md-6">
                    <label for="idProcedimento">Nome:</label>
                    <input type="text" name="procedimento" id="idProcedimento" class="form-control 
                    shadow-sm p-3 bg-white rounded" placeholder="Qual o procedimento" v-model="nome">
                </div>
                <div class="form-group col-md-6">
                    <label for="idValorProcedimento">Valor do Procedimento:</label>
                    <input type="number" name="valorProcedimento" id="idValorProcedimento" class="form-control 
                    shadow-sm p-3 bg-white rounded" placeholder="Informe o valor do procedimento" v-model="valor">
                </div>
            </div>
            <div class="form-group">
                <label for="idDescricao">Descricao:</label>
                <textarea style="resize:none;" id = "idDescricao" name="descricao" class="form-control 
                shadow-sm p-3 bg-white rounded" placeholder="Descreva o procedimento" v-model="descricao"></textarea>
            </div>
            <div class="form-group">
                <input type="reset" value="Limpar" id="resetar" class="btn btn-secondary mr-2">
                <input type="submit" value="Cadastrar" id="submeter" class="btn btn-success" v-on:click="clique()">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'CadProcedimento',
    data: function(){
        return {
            nome: '',
            valor: '',
            descricao: ''
        }
    },
    methods: {
      mostrar:function(data){
        alert(JSON.stringify(data));
      },
      clique: function(){
        this.$http.post('http://localhost:8090/quatum/api/procedimentos/',
          {nome: this.nome, valor: this.valor, descricao: this.descricao}
        ).then((res) => {this.mostrar(res.data)}).
        catch(e => console.error(e));
      }
    }
}
</script>

<style>
</style>