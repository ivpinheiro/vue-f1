<template>
    <div class="dashboard">
        <h2 class="homeAdminGerenciarLabel ajusteMargin">Selecione o relatório</h2>
        <div class="gridHome">
            <button class="btn btn-lg px-5 btn btn-success" @click="mudarParaORelatorio1()" :class="{ 'selecionado': relatorio1}">Exibir seus pilotos e suas quantidades de vitória</button>
            <button class="btn btn-lg px-5 btn btn-success" @click="mudarParaORelatorio2()" :class="{ 'selecionado': relatorio2}">Exibir sua quantidade de resultados por status</button>
        </div>
        <div class="relatorio" v-if="relatorio1">
            <h3 class="relatorio1Desc">Esse relatório lista os pilotos da escuderia, bem como a quantidade de vezes em que cada um deles alcançou a primeira posição em uma corrida.</h3>
            <div class="ordenadores">
                <h4>Ordenar por: </h4>
                <div class="ordenador" @click="mudarOrdenador(0)" :class="{ 'selecionado': selecionado == 0}">
                    <h4>Nome Piloto</h4>
                </div>
                <div class="ordenador" @click="mudarOrdenador(1)" :class="{ 'selecionado': selecionado == 1}">
                    <h4>Número de Vitórias</h4>
                </div>
            </div>
            <div class="vitoriaList">
                <div v-for="resultado in resultadosPilotos" :key="resultado.piloto" class="vitoriaGeral">
                    <h4 class="vitoria"><span class="label">Piloto: </span> {{ resultado.piloto }} <span class="label">Vitórias: </span>{{ resultado.vitorias }}</h4  >
                </div>
            </div>
        </div>
        <div class="relatorio" v-if="relatorio2">
            <h3 class="relatorio1Desc">Esse relatório indica a quantidade de resultados desta escuderia por cada status, apresentando o nome do status e sua contagem.</h3>
            <div class="ordenadores">
                <h4>Ordenar por: </h4>
                <div class="ordenador" @click="mudarOrdenador(0)" :class="{ 'selecionado': selecionado == 0}">
                    <h4>Título do Status</h4>
                </div>
                <div class="ordenador" @click="mudarOrdenador(1)" :class="{ 'selecionado': selecionado == 1}">
                    <h4>Quantidade</h4>
                </div>
            </div>
            <div class="statusList">
                <div v-for="status in statusList" :key="status.status" class="status">
                    <h4 class="statusStatus">{{ status.status }}</h4>
                    <h4 class="statusQuantity">{{ status.quantity }}</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'DashEscuderia',
        components: { },
        data(){
            return {
                relatorio1: false,
                relatorio2: false,
                selecionado: 0,
                resultadosPilotos: [],
                statusList: []
            }
        },
        methods:{
            mudarParaORelatorio1(){
                this.relatorio1 = true
                this.relatorio2 = false
                this.selecionado = 0
                this.resultadosPilotos = [
                    {
                        piloto: 'Luiz Hamilton',
                        vitorias: 12
                    },
                    {  
                        piloto: 'Airton Senna',
                        vitorias: 231
                    },
                    {
                        piloto: 'Fernando Alonso',
                        vitorias: 2
                    }
                ]
            },
            mudarParaORelatorio2(){
                this.relatorio1 = false
                this.relatorio2 = true
                this.selecionado = 0
                this.resultadosPilotos = []
                this.statusList = [
                    { "status": "Finished", "quantity": 7123 },
                    { "status": "+1 Lap", "quantity": 3856 },
                    { "status": "Engine", "quantity": 2014 },
                    { "status": "+2 Laps", "quantity": 1594 },
                    { "status": "Accident", "quantity": 1046 },
                    { "status": "Did not qualify", "quantity": 1025 },
                    { "status": "Collision", "quantity": 838 },
                    { "status": "Gearbox", "quantity": 805 },
                    { "status": "Spun off", "quantity": 792 },
                    { "status": "+3 Laps", "quantity": 731 },
                    { "status": "Suspension", "quantity": 431 },
                    { "status": "+4 Laps", "quantity": 405 },
                    { "status": "Did not prequalify", "quantity": 331 },
                    { "status": "Transmission", "quantity": 321 },
                    { "status": "Electrical", "quantity": 316 },
                    { "status": "Brakes", "quantity": 251 },
                    { "status": "Withdrew", "quantity": 244 },
                    { "status": "+5 Laps", "quantity": 221 },
                    { "status": "Clutch", "quantity": 214 },
                    { "status": "Not classified", "quantity": 172 },
                    { "status": "Fuel system", "quantity": 155 },
                    { "status": "+6 Laps", "quantity": 153 },
                    { "status": "Turbo", "quantity": 146 },
                    { "status": "Disqualified", "quantity": 143 },
                    { "status": "Hydraulics", "quantity": 138 },
                    { "status": "Overheating", "quantity": 130 },
                    { "status": "Ignition", "quantity": 128 },
                    { "status": "Oil leak", "quantity": 123 },
                    { "status": "Throttle", "quantity": 111 },
                    { "status": "Out of fuel", "quantity": 100 },
                    { "status": "+7 Laps", "quantity": 99 },
                    { "status": "Halfshaft", "quantity": 99 },
                    { "status": "Retired", "quantity": 95 },
                    { "status": "Wheel", "quantity": 88 },
                    { "status": "Oil pressure", "quantity": 87 },
                    { "status": "Fuel pump", "quantity": 66 },
                    { "status": "Differential", "quantity": 61 },
                    { "status": "Tyre", "quantity": 55 },
                    { "status": "Handling", "quantity": 54 },
                    { "status": "+8 Laps", "quantity": 52 },
                    { "status": "Fuel leak", "quantity": 50 },
                    { "status": "Steering", "quantity": 47 },
                    { "status": "Collision damage", "quantity": 45 },
                    { "status": "Radiator", "quantity": 42 },
                    { "status": "Puncture", "quantity": 41 },
                    { "status": "Power Unit", "quantity": 41 },
                    { "status": "+9 Laps", "quantity": 38 },
                    { "status": "Wheel bearing", "quantity": 37 },
                    { "status": "Injection", "quantity": 36 },
                    { "status": "Fuel pressure", "quantity": 35 },
                    { "status": "Water leak", "quantity": 32 },
                    { "status": "+10 Laps", "quantity": 32 },
                    { "status": "Alternator", "quantity": 31 }
                ]
            },
            mudarOrdenador(number){
                this.selecionado = number
                if(this.relatorio1){
                    const keys = Object.keys(this.resultadosPilotos[1]);
                    const ordenador = keys[number]
                    this.resultadosPilotos = this.resultadosPilotos.sort((a, b) => {
                                                                const labelA = a[ordenador];
                                                                const labelB = b[ordenador];
                                                                if (labelA < labelB) {
                                                                    return -1;
                                                                }
                                                                if (labelA > labelB) {
                                                                    return 1;
                                                                }
                                                                return 0;}
                                                            );
                }
                if(this.relatorio2){
                    const keys = Object.keys(this.statusList[1]);
                    const ordenador = keys[number]
                    this.statusList = this.statusList.sort((a, b) => {
                                                                const labelA = a[ordenador];
                                                                const labelB = b[ordenador];
                                                                if (labelA < labelB) {
                                                                    return -1;
                                                                }
                                                                if (labelA > labelB) {
                                                                    return 1;
                                                                }
                                                                return 0;}
                                                            );
                }
            },
        }
    }
</script>

<style scoped>
    .dashboard{
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

    .relatorio{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    

    .relatorio1Desc{
        text-align: center;
        padding: 0 50px;
        margin: 40px 0;
    }


    .ordenadores{
        display: flex;
        gap: 20px;
        margin-bottom: 20px;
        align-items: center;
        justify-content: center;
    }
    .ordenador{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        border-radius: 10px;
        box-shadow: inset 0 0 0 5px #198754;
        padding: 10px;
        cursor: pointer;

    }

    .selecionado{
        background-color: #198754;
        color: #FFF;
        transition: 0.2s;
        box-shadow: inset 0 0 0 5px #157347; 

    }
    /* Estilos para a lista de status */
    .vitoriaList {
        display: flex;
        flex-direction: column;
        width: auto;
        border: 3px solid #888888;
        padding: 10px;
        margin-bottom: 40px;
        justify-content: initial;
        align-items: initial;
    }

    /* Estilos para cada item de status */
    .statusPorCorrida {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: start;
        margin-bottom: 10px;
        padding: 5px;
    }

    /* Estilos para o título do status */
    .vitoria {
        font-size: 24px;
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        
        margin-bottom: 10px;
        padding: 5px;
    }

    .label{
        font-weight: bold;
        margin: 0 10px;
    }

    .subtitulo{
        margin-bottom: 20px;
    }

    .anos{
        display: flex;
        flex-direction: row;
        margin-bottom: 20px;
        padding-left: 20px;
    }

    .vitoriasPorCorrida{
        display: flex;
        flex-direction: column;
        width: auto;
        border: 3px solid #888888;
        padding: 10px;
        margin-bottom: 40px;
        justify-content: initial;
        align-items: initial;
    }

    .vitoriaGeral{
        display: flex;
        justify-content: initial;
        align-items: initial;
        text-align: left;
        width: auto;
    }

    .statusList {
        display: flex;
        flex-direction: column;
        width: auto;
        border: 3px solid #888888;
        padding: 10px;
        margin-bottom: 20px;
    }

    /* Estilos para cada item de status */
    .status {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        padding: 5px;
    }

    /* Estilos para o título do status */
    .statusStatus {
    font-size: 24px;
    margin-right: 10px;
    }

    /* Estilos para a quantidade do status */
    .statusQuantity {
    font-size: 24px;
    color: #888888;
    }
</style>