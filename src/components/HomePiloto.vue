<template>
    <div class="homepage">
        <div class="gridOverview">
            <div class="box">
                <h3>Vitórias</h3>
                <span>{{ vitorias }}</span>
            </div>
            <div class="box">
                <h3>De</h3>
                <span>{{ anoInicio }}</span>
            </div>
            <div class="box">
                <h3>Até</h3>
                <span>{{ anoFim }}</span>
            </div>
        </div>
        <h2 class="titulo">Acessar Relatórios</h2>
        <div>
            <router-link class="btn btn-lg px-5 btn btn-success" to="/dash">Exibir relatórios</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeEscuderia",
    props: {
        name: {
            type: String,
            required: true
        },
        vitorias: {
            type: Number,
            required: true
        },
        anoInicio: {
            type: Number,
            required: true
        },
        anoFim: {
            type: Number,
            required: true
        },
    },
}
</script>

<style scoped>
.homepage {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.gridOverview {
    display: grid;
    gap: 25px 25px;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 40px;

}

.titulo {
    margin-bottom: 20px;
    margin-top: 40px;
}

.ajusteMargin {
    margin-top: -10px;
}

.box {
    width: 100px;
    height: 100px;
    border-radius: 15px;
    border: 5px solid #198754;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.box h3 {
    text-align: center;
    font-size: 20px;
}

.box span {
    font-size: 35px;
    margin-top: -20px;
}
</style>