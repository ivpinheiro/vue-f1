<template>
    <div class="homepage">
        <h2 class="homeAdminGerenciarLabel ajusteMargin">Acessar Relatórios</h2>
        <router-link class="btn btn-lg px-5 btn btn-success" to="/dash">Exibir relatórios</router-link>
        <h2 class="homeAdminGerenciarLabel">Gerenciar Tabelas</h2>
        <div class="gridHome">
            <button class="btn btn-lg px-5 btn btn-success" @click="showManagerMethodEscuderia()">Gerenciar
                Escuderias</button>
            <button class="btn btn-lg px-5 btn btn-success" @click="showManagerMethodPiloto()">Gerenciar Pilotos</button>
        </div>
        <ElementManager :view-role="true" :update-role="true" :delete-role="true" :responseDataElements="elements"
            :responseDataPerson="person" :loading="loading" v-if="showManagerPiloto || showManagerEscuderia" :end-point="endPoint" :addDriver="showManagerPiloto" :addConstructor="showManagerEscuderia" :viewConstructor="showManagerEscuderia" :viewDriver="showManagerPiloto"/>
    </div>
</template>

<script>
import ElementManager from '@/components/ElementManager.vue';
import { ElementService } from '../services/ElementService.js';

export default {
    name: 'HomeAdmin',
    components: { ElementManager },
    data: function () {
        return {
            loading: false,
            elements: [],
            person: {},
            showManagerEscuderia: false,
            showManagerPiloto: false,
            endPoint: '123456'
        }
    },
    methods: {
        async showManagerMethodEscuderia() {
            this.showManagerEscuderia = !this.showManagerEscuderia;
            this.showManagerPiloto = false;
            if (this.showManagerEscuderia) {
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
        },
        async showManagerMethodPiloto() {
            this.showManagerPiloto = !this.showManagerPiloto;
            this.showManagerEscuderia = false;
            if (this.showManagerPiloto) {
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

.gridHome {
    display: grid;
    gap: 25px 25px;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 40px;

}

.homeAdminGerenciarLabel {
    margin-bottom: 20px;
    margin-top: 40px;
}

.ajusteMargin {
    margin-top: -10px;
}
</style>