<template>
  <div>
    <div class="content">
      <!-- <PaginationTable/> -->
      <router-view />
    </div>
  </div>
</template>
<script>
export default ({
  name: 'App',
})
</script>

<style scoped>

.content {
  margin-top: 100px; /* Ajuste esse valor de acordo com a altura da navbar */
  /* Outras estilizações do conteúdo */
}
</style>
