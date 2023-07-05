<template>
    <nav class="navbar navbar-expand-lg navbar-dark navFixada">
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
                <div v-if="roleType == 'Administrador'">
                    <img src="../assets/img/Administrador.png" class="navbar-brand admin" alt="Engrenagens" />
                </div>
                <div v-else-if="roleType == 'Escuderia'">
                    <img src="../assets/img/Escuderia.png" class="navbar-brand" alt="Bandeiras de F1" />
                </div>
                <div v-else-if="roleType == 'Piloto'">
                    <img src="../assets/img/Piloto.png" class="navbar-brand" alt="Carro de F1" />
                </div>
                <div v-else>
                    <img src="../assets/img/Piloto.png" class="navbar-brand" alt="Carro de F1" />
                </div>
                <div v-if="roleType" class="collapse navbar-collapse navbar-brand titulo">
                    {{roleType}}
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
        roleType: { 
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
            localStorage.setItem('permissoes', "");
            localStorage.setItem('usuarioLogado', "");
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

 .navFixada{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
 }
</style>