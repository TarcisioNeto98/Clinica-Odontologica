<template>
    <div class="container">
        <h2>Buscar de Usuário</h2>
        <b-form>
            <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
                <b-form-input id="input-1" type="email" required placeholder="Enter email" ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                <b-form-input id="input-2" required placeholder="Enter name"></b-form-input>
            </b-form-group>
        <b-button type="submit" variant="primary">Buscar</b-button>
        <b-button type="reset" variant="danger">Limpar</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
    name:'BuscarUsuario'
}
</script>

<style>
    h2{
        text-align: center;
    }
</style>