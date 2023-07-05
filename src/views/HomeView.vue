<template>
  <div>
    <NavBar :roletype="permissoes" isHomePage />
    <HomeAdmin v-if="permissoes == 'Administrador'" />
    <HomeEscuderia :name="name" :vitorias="vitorias" :qtdPilotos="qtdPilotos" :anoInicio="anoInicio" :anoFim="anoFim"
      v-if="permissoes == 'Escuderia'" />
    <HomePiloto :name="name" :escuderia="escuderia" :vitorias="vitorias" :anoInicio="anoInicio" :anoFim="anoFim"
      v-if="permissoes == 'Piloto'" />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import HomeAdmin from '../components/HomeAdmin.vue'
import HomeEscuderia from '../components/HomeEscuderia.vue'
import HomePiloto from '../components/HomePiloto.vue'
export default {
  name: 'HomeView',
  components: { NavBar, HomeAdmin, HomeEscuderia, HomePiloto },
  data() {
    return {
      token: "",
      permissoes: [],
      name: "Ferrari",
      escuderia: "",
      vitorias: 34,
      qtdPilotos: 54,
      anoInicio: 1981,
      anoFim: 2022

    }
  },
  mounted() {

    this.token = window.localStorage.getItem('token')
    this.permissoes = window.localStorage.getItem('permissoes')

    if (!this.token) {
      this.$router.push('/login')
    }


  }

}
</script>
