<template>
  <div>
    <div class="nav-bar">
      <NavBar></NavBar>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue'
export default ({
  name: 'App',
  components: { NavBar }
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  /* Outras estilizações da navbar */
}

.content {
  margin-top: 100px; /* Ajuste esse valor de acordo com a altura da navbar */
  /* Outras estilizações do conteúdo */
}
</style>
