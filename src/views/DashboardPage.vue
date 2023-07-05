<template>
    <div>
        <NavBar :tipo="permissoes" isDashPage />
        <DashAdmin v-if="permissoes == 'Administrador'"/>
        <DashPiloto v-if="permissoes == 'Piloto'"/>
    </div>
    
</template>

<script>
import NavBar from '../components/NavBar.vue'
import DashAdmin from '../components/DashAdmin.vue'
import DashPiloto from '../components/DashPiloto.vue'

export default {
    name: 'DashboardPage',
    components: { NavBar, DashAdmin, DashPiloto },
    data: function () {
        return {
            permissoes: [],
            token: ""
        }
    },
    mounted() {
    
        this.token = window.localStorage.getItem('token')
        this.permissoes = window.localStorage.getItem('permissoes')
        
        if(!this.token){
        this.$router.push('/login')
        }
    }
}
</script>

<style scoped></style>