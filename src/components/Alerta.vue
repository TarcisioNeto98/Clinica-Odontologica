<template>
    <div v-if="expor">
        <div class="alert alert-danger" role="alert">
            <span v-html="conteudo"></span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Alerta',
    props: ['conteudo', 'expor']
}
</script>

<style>
    .ocultar{
        display: none;
    }
</style>