<template>
    <h1 class="titulo">{{ value }}</h1>
</template>

<script>
export default {
    name: 'TituloUsuario',
    props: {
        value: { 
            type: String,
            required: false
        }
    },
}
</script>

<style scoped>
 .titulo{
    text-align: center;
    margin-top: -10px;
    margin-bottom: 60px;
 }
</style>