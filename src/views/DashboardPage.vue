<template>
    <div>
        <NavBar :roleType="permissoes" isDashPage />
        <TituloUsuario :value="usuarioLogado" />
        <DashAdmin v-if="permissoes == 'Administrador'"/>
        <DashEscuderia v-if="permissoes == 'Escuderia'"/>
        <DashPiloto v-if="permissoes == 'Piloto'"/>
    </div>
    
</template>

<script>
import NavBar from '../components/NavBar.vue'
import DashAdmin from '../components/DashAdmin.vue'
import DashPiloto from '../components/DashPiloto.vue'
import DashEscuderia from '../components/DashEscuderia.vue'
import TituloUsuario from '../components/TituloUsuario.vue'

export default {
    name: 'DashboardPage',
    components: { NavBar, DashAdmin, DashPiloto, DashEscuderia, TituloUsuario },
    data: function () {
        return {
            permissoes: "",
            token: "",
            usuarioLogado: "",
        }
    },
    mounted() {
    
        this.token = window.localStorage.getItem('token')
        this.permissoes = window.localStorage.getItem('permissoes')
        this.usuarioLogado = window.localStorage.getItem('usuarioLogado')
        
        if(!this.token){
        this.$router.push('/login')
        }
    }
}
</script>

<style scoped></style>