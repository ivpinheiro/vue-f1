<template>
    <nav class="fixed-top navbar navbar-expand-lg navbar navbar-dark">
        <div class="container">
            <a href="/">
                <div v-if="tipo == 'Administrador'">
                    <img src="../assets/img/Administrador.png" class="navbar-brand admin" alt="F1 Car" />
                </div>
                <div v-else-if="tipo == 'Escuderia'">
                    <img src="../assets/img/Escuderia.png" class="navbar-brand" alt="F1 Car" />
                </div>
                <div v-else-if="tipo == 'Piloto'">
                    <img src="../assets/img/Piloto.png" class="navbar-brand" alt="F1 Car" />
                </div>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active">
                        <router-link to="/" class="navbar-brand" style="">
                            {{titulo}}
                        </router-link>
                        <span class="sr-only">(current)</span></a>
                    <!-- <a class="nav-item nav-link" href="#">Features</a>
                    <a class="nav-item nav-link" href="#">Pricing</a>
                    <a class="nav-item nav-link disabled" href="#">Disabled</a> -->
                </div>
            </div>
            <div class="my-2 my-lg-0" v-if="isHomePage">
                <router-link to="/dash" class="navbar-brand">
                    <i class="fa fa-tachometer"></i>
                    Relatórios
                </router-link>
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
    </nav>
    <!-- <nav class="navbar navbar-dark bg-success navbar-expand-sm">
        <div class="row"></div>
        <div class="container">
            <router-link to="/" class="navbar-brand">
                <i class="fa fa-home"></i>
                Home
            </router-link>
            <router-link to="/" class="navbar-brand">
                <i class="fa fa-sign-in"></i>
                Sign-in
            </router-link>
        </div>
    </nav> -->
</template>

<script>
export default {
    name: 'NavBar',
    props: {
        titulo: {
            type: String,
            required: true
        },
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
</style>