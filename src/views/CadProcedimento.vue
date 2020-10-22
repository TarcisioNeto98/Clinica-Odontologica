<template>
    <div id="generic" class="container">
        <h2 class="mt-2 mb-2">Cadastrar Novo Procedimento</h2>
        <form name="cadProcedimento">
            <div class="row">
                <div class="form-group col-md-6">
                    <label for="idProcedimento">Procedimento:</label>
                    <input type="text" name="procedimento" id="idProcedimento" class="form-control 
                    shadow-sm p-3 bg-white rounded" placeholder="Qual o procedimento">
                </div>
                <div class="form-group col-md-6">
                    <label for="idValorProcedimento">Valor do Procedimento:</label>
                    <input type="number" name="valorProcedimento" id="idValorProcedimento" class="form-control 
                    shadow-sm p-3 bg-white rounded" placeholder="Informe o valor do procedimento">
                </div>
            </div>
            <div class="form-group">
                <label for="idDescricao">Descricao:</label>
                <textarea style="resize:none;" id = "idDescricao" name="descricao" class="form-control 
                shadow-sm p-3 bg-white rounded" placeholder="Descreva o procedimento"></textarea>
            </div>
            <div class="form-group">
                <input type="reset" value="Limpar" id="resetar" class="btn btn-secondary mr-2">
                <input type="submit" value="Cadastrar" id="submeter" class="btn btn-success">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'CadProcedimento'
}
</script>

<style>
</style>