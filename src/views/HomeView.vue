<template>
  <div>
    <NavBar :roleType="permissoes" isHomePage />

    <TituloUsuario :value="usuarioLogado" />
    <HomeAdmin v-if="permissoes == 'Administrador'" />
    <HomeEscuderia :name="usuarioLogado" :vitorias="vitorias" :qtdPilotos="qtdPilotos" :anoInicio="anoInicio" :anoFim="anoFim"
      v-if="permissoes == 'Escuderia'" />
    <HomePiloto :name="usuarioLogado" :vitorias="vitorias" :anoInicio="anoInicio" :anoFim="anoFim"
      v-if="permissoes == 'Piloto'" />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import HomeAdmin from '../components/HomeAdmin.vue'
import HomeEscuderia from '../components/HomeEscuderia.vue'
import HomePiloto from '../components/HomePiloto.vue'
import TituloUsuario from '../components/TituloUsuario.vue'
export default {
  name: 'HomeView',
  components: { NavBar, HomeAdmin, HomeEscuderia, HomePiloto, TituloUsuario },
  data() {
    return {
      token: "",
      permissoes: "",
      name: "",
      usuarioLogado: "",
      vitorias: 34,
      qtdPilotos: 54,
      anoInicio: 1981,
      anoFim: 2022

    }
  },
  mounted() {

    this.token = window.localStorage.getItem('token')
    this.permissoes = window.localStorage.getItem('permissoes')
    this.usuarioLogado = window.localStorage.getItem('usuarioLogado')

    if (!this.token) {
      this.$router.push('/login')
    }


  }

}
</script>
