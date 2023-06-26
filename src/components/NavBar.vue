<template>
    <nav class="fixed-top navbar navbar-expand-lg navbar navbar-dark">
        <div class="container">
            <a href="/">
                <img src="../assets/img/f1-car.png" class="navbar-brand" alt="F1 Car" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active">
                        <router-link to="/" class="navbar-brand" style="">
                            Home
                        </router-link>
                        <span class="sr-only">(current)</span></a>
                    <!-- <a class="nav-item nav-link" href="#">Features</a>
                    <a class="nav-item nav-link" href="#">Pricing</a>
                    <a class="nav-item nav-link disabled" href="#">Disabled</a> -->
                </div>
            </div>
            <div class="my-2 my-lg-0" v-if="!isLoginPage">
                <router-link to="/login" class="navbar-brand">
                    <i class="fa fa-sign-in"></i>
                    Sign-in
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
    data() {
        return {
            isLoginPage: false // Defina como true se estiver na página de login
        };
    },
    created() {
        this.getCurrentPage(); // Chama a função getCurrentPage no gancho created
    },
    watch: {
        '$route'() {
            this.getCurrentPage(); // Chama a função getCurrentPage sempre que a rota mudar
        }
    },
    methods: {
        getCurrentPage() {
            this.isLoginPage = this.$route.path.includes('/login');
        }
    }
}
</script>

<style scoped></style>