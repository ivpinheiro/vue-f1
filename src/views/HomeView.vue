<template>
  <NavBar :tipo="userType" isHomePage />
  <HomeAdmin v-if="userType == 'Administrador'"/>
  <HomeEscuderia :name="name" v-if="userType == 'Escuderia'"/>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import HomeAdmin from '../components/HomeAdmin.vue'
import HomeEscuderia from '../components/HomeEscuderia.vue'
export default {
  name: 'HomeView',
  components: {NavBar, HomeAdmin, HomeEscuderia},
  data(){
    return {
      userType: "Escuderia",
      name: "Ferrari"
    }
  }
}
</script>
