<template>
    <nav class="fixed-top navbar navbar-expand-lg navbar navbar-dark">
        <div class="container">
            <div>
                <div class="my-2 my-lg-0" v-if="isDashPage">
                    <div class="navbar-brand">
                        <i class="fa fa-database"></i>
                        Relatórios
                    </div>
                </div>
                <div class="my-2 my-lg-0" v-if="isHomePage">
                    <div class="navbar-brand">
                        <i class="fa fa-home"></i>
                        Home
                    </div>
                </div>
            </div>
            <div class="usuario">
                <div v-if="tipo == 'Administrador'">
                    <img src="../assets/img/Administrador.png" class="navbar-brand admin" alt="F1 Car" />
                </div>
                <div v-else-if="tipo == 'Escuderia'">
                    <img src="../assets/img/Escuderia.png" class="navbar-brand" alt="F1 Car" />
                </div>
                <div v-else-if="tipo == 'Piloto'">
                    <img src="../assets/img/Piloto.png" class="navbar-brand" alt="F1 Car" />
                </div>
                <div class="collapse navbar-collapse navbar-brand" id="navbarNavAltMarkup">
                    {{tipo}}
                </div>
            </div>
            <div>
                <div class="my-2 my-lg-0" v-if="isHomePage">
                    <router-link to="/login" class="navbar-brand">
                        <i class="fa fa-sign-in"></i>
                        Sair
                    </router-link>
                </div>
                <div class="my-2 my-lg-0" v-if="isDashPage">
                    <router-link to="/" class="navbar-brand">
                        <i class="fa fa-home"></i>
                        Home
                    </router-link>
                    <router-link to="/login" class="navbar-brand">
                        <i class="fa fa-sign-in"></i>
                        Sair
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    props: {
        tipo: { 
            type: String,
            required: false
        },
        isLoginPage: { 
            type: Boolean,
            default: false,
            required: false
        },
        isHomePage: { 
            type: Boolean,
            default: false,
            required: false
        },
        isDashPage: { 
            type: Boolean,
            default: false,
            required: false
        },
    }
}
</script>

<style scoped>
 .admin{
    width: 50px;
 }
 .container{
    justify-content: space-between;
 }

 .usuario{
    display: flex;
    flex-direction: row;
 }
</style>