<template>
    <form name="cadDependente" class="container">
        <h2 id="h2personalizado">Cadastrar de Dependente</h2>
        <div class="form-group">
            <label for="idDependente">Nome do Dependente:</label>
            <input type="text" name="nomeDependente" id="idDependente" class="form-control" placeholder="Nome do Dependente">
        </div>
        <div class="form-group">
            <label for="idCpfDependente">CPF:</label>
            <input type="number" name="cpfDependente" id="idCpfDependente" class="form-control" placeholder="CPF do Dependente">
        </div>
        <div class="form-group">
            <input type="reset" value="Limpar" class="btn btn-secondary">
            <input type="button" value="Cadastrar" class="btn btn-success">
		</div>   
    </form>
</template>

<script>
export default {
    name: 'CadDependente'
}
</script>