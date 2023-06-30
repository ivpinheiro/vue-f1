<template>
  <NavBar :tipo="userType" isHomePage />
  <HomeAdmin v-if="userType == 'Administrador'"/>
  <HomeEscuderia :name="name" :vitorias="vitorias" :qtdPilotos="qtdPilotos" :anoInicio="anoInicio" :anoFim="anoFim" v-if="userType == 'Escuderia'"/>
  <HomePiloto :name="name" :escuderia="escuderia" :vitorias="vitorias" :anoInicio="anoInicio" :anoFim="anoFim" v-if="userType == 'Piloto'"/>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import HomeAdmin from '../components/HomeAdmin.vue'
import HomeEscuderia from '../components/HomeEscuderia.vue'
import HomePiloto from '../components/HomePiloto.vue'
export default {
  name: 'HomeView',
  components: {NavBar, HomeAdmin, HomeEscuderia, HomePiloto},
  data(){
    return {
      userType: "Piloto",
      name: "Airton Senna",
      escuderia: "Ferrari",
      vitorias: 34,
      qtdPilotos: 54,
      anoInicio: 1981,
      anoFim: 2022
    }
  }
}
</script>
