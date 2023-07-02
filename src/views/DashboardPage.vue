<template>
    <div>
        <NavBar :tipo="permissoes" isDashPage />
        <DashAdmin v-if="permissoes == 'Administrador'"/>
    </div>
    
</template>

<script>
import NavBar from '../components/NavBar.vue'
import DashAdmin from '../components/DashAdmin.vue'

export default {
    name: 'DashboardPage',
    components: { NavBar, DashAdmin },
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