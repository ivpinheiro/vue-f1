<template>
    <div class="homepage">
        <h2 class="homeAdminGerenciarLabel ajusteMargin">Acessar Relatórios</h2>
        <router-link class="btn btn-lg px-5 btn btn-success" to="/dash" >Exibir relatórios</router-link>
        <h2 class="homeAdminGerenciarLabel">Gerenciar Tabelas</h2>
        <div class="gridHome">
            <router-link class="btn btn-lg px-5 btn btn-success" to="/escuderia" >Gerenciar Escuderias</router-link>
            <router-link class="btn btn-lg px-5 btn btn-success" to="/piloto" >Gerenciar Pilotos</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeAdmin'
    }
</script>

<style scoped>
    .homepage{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .gridHome{
        display: grid;
        gap: 25px 25px;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 40px;

    }
    .homeAdminGerenciarLabel{
        margin-bottom: 20px;
        margin-top: 40px;
    }

    .ajusteMargin{
        margin-top: -10px;
    }
</style>