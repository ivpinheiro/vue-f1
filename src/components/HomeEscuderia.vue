<template>
    <div class="homepage">
        <div class="gridOverview">
            <div class="box">
                <h3>Vitórias</h3>
                <span>{{ vitorias }}</span>
            </div>
            <div class="box">
                <h3>Pilotos</h3>
                <span>{{ qtdPilotos }}</span>
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
        <ElementManager :view-role="true" :update-role="true" :delete-role="true" :responseDataElements="elements" :responseDataPerson="person" :loading="loading" :end-point="endPoint" :addDriver="false" :addConstructor="showManagerEscuderia"/>
    </div>
</template>

<script>
import ElementManager from '@/components/ElementManager.vue';
import { ElementService } from '../services/ElementService.js';

export default {
    name: "HomeEscuderia",
    components: { ElementManager },
    props: {
        name: {
            type: String,
            required: true
        },
        vitorias: {
            type: Number,
            required: true
        },
        qtdPilotos: {
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
    data: function () {
        return {
            loading: false,
            elements: [],
            person: {},
            endPoint: '123456'
        }
    },
    created: async function () {
        try {
            this.loading = true;
            let response = await ElementService.getAllElements();
            this.elements = response.data;
            let nresponse = await ElementService.getPerson();
            this.person = nresponse.data;
            this.loading = false;
        } catch (error) {
            this.errorMessage = error;
            this.loading = false;
        }
    }    
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
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-bottom: 40px;

}

.titulo {
    margin-bottom: 20px;
    margin-top: 40px;
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