<template>
    <div class="dashboard">
        <h2 class="homeAdminGerenciarLabel ajusteMargin">Selecione o relatório</h2>
        <div class="gridHome">
            <button class="btn btn-lg px-5 btn btn-success" @click="mudarParaORelatorio1()">Exibir resultados </button>
            <button class="btn btn-lg px-5 btn btn-success" @click="mudarParaORelatorio2()">Aeroportos próximos no território brasileiro</button>
        </div>
        <div class="relatorio" v-if="relatorio1">
            <h3 class="relatorio1Desc">Esse relatório indica a quantidade de resultados por cada status, apresentando o
nome do status e sua contagem.</h3>
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
        <div class="relatorio" v-if="relatorio2">
            <h3 class="relatorio1Desc">Esse relatório indica os aeroportos de médio e largo porte no Brasil que estejam no máximo a 100km de distância da cidade brasileira que for informada a baixo:</h3>
            <div class="busca">
                <h4 class="buscaTitle">Buscar por: </h4>
                <input class="buscaInput form-control form-control-lg" v-model="busca" type="text" placeholder="Digite o nome da cidade" @keypress="handleKeyPress">
                <button class="buscaButton btn btn-lg px-5 btn btn-success" type="submit" @click="buscar()">Buscar</button>
            </div>
            <div v-if="cidades.length > 0" class="ordenadores">
                <h4>Ordenar por: </h4>
                <div class="ordenador" @click="mudarOrdenador(0)" :class="{ 'selecionado': selecionado == 0}">
                    <h4>Código IATA</h4>
                </div>
                <div class="ordenador" @click="mudarOrdenador(1)" :class="{ 'selecionado': selecionado == 1}">
                    <h4>Aeroporto</h4>
                </div>
                <div class="ordenador" @click="mudarOrdenador(2)" :class="{ 'selecionado': selecionado == 2}">
                    <h4>Cidade do Aeroporto</h4>
                </div>
                <div class="ordenador" @click="mudarOrdenador(3)" :class="{ 'selecionado': selecionado == 3}">
                    <h4>Distância em Km</h4>
                </div>
                <div class="ordenador" @click="mudarOrdenador(4)" :class="{ 'selecionado': selecionado == 4}">
                    <h4>Tipo Aeroporto</h4>
                </div>
            </div>
            <div class="container mt-3" v-if="cidades.length > 0">
                <div class="row cidades">
                    <div class="col-md-6 statusList" v-for="cidade in cidades" :key="cidade.nome">
                        <h4 class="cidades">{{ cidade.nome }} - Latitude: {{ cidade.lat }} Longitude: {{ cidade.long }}</h4>
                            <div class="aeroporto" v-for="aeroporto in cidade.aeroportosProximos" :key="aeroporto.codigo_IATA">
                                <p><span class="label">Código IATA:</span> {{ aeroporto.codigo_IATA }}</p>
                                <p><span class="label">Aeroporto:</span> {{ aeroporto.aeroporto }}</p>
                                <p><span class="label">Cidade:</span> {{ aeroporto.cidade_aeroporto }}</p>
                                <p><span class="label">Distância:</span> {{ aeroporto.distancia_em_km.toFixed(2) }}km</p>
                                <p><span class="label">Tipo:</span> {{ aeroporto.tipo_aeroporto }}</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'DashAdmin',
        components: { },
        data(){
            return {
                relatorio1: false,
                relatorio2: false,
                selecionado: 1,
                resultadoPiloto: {
                    totalVitorias: 2,
                    porAno:[
                        {
                            ano: 2022,
                            titulos: [
                                'grampix'
                            ]
                        },
                        {
                            ano: 2023,
                            titulos: [
                                'grampix'
                            ]
                        }
                    ],
                    porCorrida:[
                        {
                            nomeCorrida: 'grampix',
                            anos: [
                                2022, 2023
                            ]
                        }
                    ]
                }
            }
        },
        methods:{
            mudarParaORelatorio1(){
                this.relatorio1 = true
                this.relatorio2 = false
                this.selecionado = 1
                this.cidades = []
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
            mudarParaORelatorio2(){
                this.relatorio1 = false
                this.relatorio2 = true
                this.cidades = []
                this.statusList = []
                this.selecionado = 3
            },
            mudarOrdenador(number){
                this.selecionado = number
                if(this.relatorio1){
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
                if(this.relatorio2){
                    const keys = Object.keys(this.cidades[1].aeroportosProximos[1]);
                    const ordenador = keys[number]
                    this.cidades.forEach(cidade => {
                        cidade.aeroportosProximos = cidade.aeroportosProximos.sort((a, b) => {
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
                    );


                }
            },
            buscar(){
                this.cidades = 
                [
                   {
                       "nome": "Palmas",
                       "lat": -123122,
                       "long": -312533,
                       aeroportosProximos:[
                           {
                               "codigo_IATA": "MCZ",
                               "aeroporto": "Zumbi dos Palmares Airport",
                               "cidade_aeroporto": "Maceió",
                               "distancia_em_km": 18.334337459440547,
                               "tipo_aeroporto": "medium_airport"
                           },
                           {
                               "codigo_IATA": "",
                               "aeroporto": "Campo Délio Jardim de Mattos Airport",
                               "cidade_aeroporto": "Rio de Janeiro",
                               "distancia_em_km": 21.054782453529477,
                               "tipo_aeroporto": "medium_airport"
                           },
                           {
                               "codigo_IATA": "GRU",
                               "aeroporto": "Guarulhos - Governador André Franco Montoro International Airport",
                               "cidade_aeroporto": "São Paulo",
                               "distancia_em_km": 21.46692425762662,
                               "tipo_aeroporto": "large_airport"
                           },
                           {
                               "codigo_IATA": "SSA",
                               "aeroporto": "Deputado Luiz Eduardo Magalhães International Airport",
                               "cidade_aeroporto": "Salvador",
                               "distancia_em_km": 21.58471036151831,
                               "tipo_aeroporto": "large_airport"
                           },
                           {
                               "codigo_IATA": "CNF",
                               "aeroporto": "Tancredo Neves International Airport",
                               "cidade_aeroporto": "Belo Horizonte",
                               "distancia_em_km": 31.88609470224482,
                               "tipo_aeroporto": "large_airport"
                           },
                           {
                               "codigo_IATA": "IZA",
                               "aeroporto": "Presidente Itamar Franco Airport",
                               "cidade_aeroporto": "Juiz de Fora",
                               "distancia_em_km": 33.42876683533632,
                               "tipo_aeroporto": "medium_airport"
                           },
                           {
                               "codigo_IATA": "SNZ",
                               "aeroporto": "Santa Cruz Air Force Base",
                               "cidade_aeroporto": "Rio de Janeiro",
                               "distancia_em_km": 55.122191487156186,
                               "tipo_aeroporto": "medium_airport"
                           },
                           {
                               "codigo_IATA": "TMT",
                               "aeroporto": "Trombetas Airport",
                               "cidade_aeroporto": "Oriximiná",
                               "distancia_em_km": 66.56520341281421,
                               "tipo_aeroporto": "medium_airport"
                           },
                           {
                               "codigo_IATA": "MEU",
                               "aeroporto": "Monte Dourado - Serra do Areão Airport",
                               "cidade_aeroporto": "Almeirim",
                               "distancia_em_km": 70.5572440938035,
                               "tipo_aeroporto": "medium_airport"
                           }
                        ]
                    }, 
                    {
                       "nome": "Palmas",
                       "lat": -123122,
                       "long": -312533,
                       aeroportosProximos:[
                           {
                               "codigo_IATA": "CWB",
                               "aeroporto": "Afonso Pena Airport",
                               "cidade_aeroporto": "Curitiba",
                               "distancia_em_km": 14.874290457270122,
                               "tipo_aeroporto": "medium_airport"
                           },
                           {
                               "codigo_IATA": "RBR",
                               "aeroporto": "Rio Branco-Plácido de Castro International Airport",
                               "cidade_aeroporto": "Rio Branco",
                               "distancia_em_km": 14.94098487967697,
                               "tipo_aeroporto": "medium_airport"
                           },
                           {
                               "codigo_IATA": "ROO",
                               "aeroporto": "Maestro Marinho Franco Airport",
                               "cidade_aeroporto": "Rondonópolis",
                               "distancia_em_km": 15.970973936232529,
                               "tipo_aeroporto": "medium_airport"
                           },
                           {
                               "codigo_IATA": "JTC",
                               "aeroporto": "Bauru/Arealva–Moussa Nakhal Tobias State Airport",
                               "cidade_aeroporto": "Bauru",
                               "distancia_em_km": 17.168897982419114,
                               "tipo_aeroporto": "medium_airport"
                           },
                           {
                               "codigo_IATA": "NAT",
                               "aeroporto": "São Gonçalo do Amarante - Governador Aluízio Alves International Airport",
                               "cidade_aeroporto": "Natal",
                               "distancia_em_km": 17.62816730753729,
                               "tipo_aeroporto": "medium_airport"
                           }
                        ]
                    }, 
                ]
            },
            handleKeyPress(event) {
                if (event.key === 'Enter') {
                    this.buscar();
                }
            }
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

    .busca{
        display: flex;
        gap: 20px;
        margin-bottom: 40px;
        align-items: center;
        justify-content: center;
        max-width: 800px;
        padding: 0 20px;
    }

    .buscaTitle{
        width: 250px;
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
        border: 5px solid #198754;
        padding: 5px;
        cursor: pointer;

    }

    .selecionado{
        background-color: #198754;
        color: #FFF;
        transition: 0.2s;
    }
    /* Estilos para a lista de status */
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

    .cidades{
        display: flex;
        flex-direction: column;
        padding: 10px;
    }

    .aeroporto{
        margin: 20px;
        background-color: #1987542f;
        color: #000;
        font-size: 24px;
        padding: 10px;
        border-radius: 10px;
    }

    .label{
        font-weight: bold;
    }
</style>