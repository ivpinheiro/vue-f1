<template>
    <nav class="fixed-top navbar  navbar-expand-lg navbar-dark navGrad">
        <div class="container">
            <div class="iten">
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
            <div class="usuario iten iten2">
                <div v-if="tipo == 'Administrador'">
                    <img src="../assets/img/Administrador.png" class="navbar-brand admin" alt="F1 Car" />
                </div>
                <div v-else-if="tipo == 'Escuderia'">
                    <img src="../assets/img/Escuderia.png" class="navbar-brand" alt="F1 Car" />
                </div>
                <div v-else-if="tipo == 'Piloto'">
                    <img src="../assets/img/Piloto.png" class="navbar-brand" alt="F1 Car" />
                </div>
                <div v-else>
                    <img src="../assets/img/Piloto.png" class="navbar-brand" alt="F1 Car" />
                </div>
                <div v-if="tipo" class="collapse navbar-collapse navbar-brand titulo">
                    {{tipo}}
                </div>
                <div v-else class="collapse navbar-collapse navbar-brand titulo">
                    Sistema da Fórmula 1
                </div>
            </div>
            <div class="my-2 my-lg-0 cursorClass acoes iten iten3">
                <router-link to="/" class="navbar-brand" v-if="isDashPage">
                    <i class="fa fa-home"></i>
                    <span class="titulo">Home</span>
                </router-link>
                <router-link to="/dash" class="navbar-brand" v-if="isHomePage">
                    <i class="fa fa-database"></i>
                    <span class="titulo">Relatórios</span>
                </router-link>
                <div class="navbar-brand" @click="logout()" v-if="!isLoginPage">
                    <i class="fa fa-sign-in"></i>
                    <span class="titulo">Sair</span>
                    
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
    },
    methods:{
        logout() {
            localStorage.setItem('token', "");
            localStorage.setItem('permissoes', []);
            this.$router.push('/login')
        }
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

 .titulo{
    width: fit-content;
    margin: 0 5px;
 }

 .cursorClass{
    cursor: pointer;
 }

 .acoes{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
 }

 .iten{
    width: 33%;
 }

 .iten2{
    width: auto;
    justify-content: center;
 }
 
 .iten3{
    justify-content: end;
    gap: 20px;
 }
</style>