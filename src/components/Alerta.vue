<template>
    <div class="alert alert-danger" role="alert">
        {{ conteudo }}
    </div>
</template>
<script>
export default {
    name: 'Alerta',
    props: ['conteudo']
}
</script>