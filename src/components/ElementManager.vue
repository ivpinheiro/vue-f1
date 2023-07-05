<template>
    <div class="element-manager">
        <div class="container mt-3">
            <div class="row">
                <div class="col">
                    <p class="h3 text-success fw-bold">Gerenciador
                        <span class="btn">
                            <ModalElement btn-title=" Adicionar Elemento" :btn-opt="false" modal-title="Adicionar" :visible="false"
                                variant="success" btn-class-external="btn btn-success btn-sm"
                                btn-class-internal="fa fa-plus-circle" title="Adicionar">
                                <AddElement :end-point="endPoint" :addDriver="addDriver" :addConstructor="addConstructor"/>
                            </ModalElement>
                        </span>
                        <!-- <span class="btn">
                            <ModalElement btn-title=" Consulta" :btn-opt="true" modal-title="Query" :visible="false"
                                variant="success" btn-class-external="btn btn-success btn-sm"
                                btn-class-internal="fa fa-plus-circle" btn-opt-title="Run Query" @btnClicked="resolveEvent">                                
                            </ModalElement>
                        </span> -->
                    </p>
                    <p class="fst-italic">
                        Bem-vindo ao painel de gerenciamento de elementos de base de dados, o local perfeito para controlar e administrar todos os dados importantes.
                    </p>
                    <!-- <form>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="row">
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Insira o ID">
                                    </div>
                                    <div class="col">
                                        <input type="submit" class="btn btn-outline-dark" placeholder="Insira o ID">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form> -->
                </div>
            </div>
        </div>

        <!--SpinnerLoader-->
        <div v-if="loading">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <SpinnerLoader />
                    </div>
                </div>
            </div>
        </div>

        <!--ErroMessage-->
        <div v-if="!loading && errorMessage">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <p class="h3 text-danger fw-bold">{{ errorMessage }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div class="container mt-3" v-if="pagedElements.length > 0">
                <div class="row">
                    <div class="col-md-6" v-for="element in pagedElements" :key="element.id">
                        <CardView :element="element" :view-role="viewRole" :update-role="updateRole"
                            :delete-role="deleteRole" :viewDriver="viewDriver" :viewConstructor="viewConstructor">
                        </CardView>
                    </div>
                </div>
            </div>

            <PaginationTable :total-pages="totalPages" :current-page="currentPage" :change-page="changePage">
            </PaginationTable>
        </div>
    </div>
</template>

<script>
// import { ElementService } from '../services/ElementService.js'
import CardView from './CardView.vue';
import PaginationTable from './PaginationTable.vue';
import SpinnerLoader from './SpinnerLoader.vue'
import ModalElement from './ModalElement.vue'
import AddElement from './AddElement.vue'

export default {
    name: 'ElementManager',
    components: { SpinnerLoader, CardView, PaginationTable, ModalElement, AddElement },
    props: {
        viewRole: {
            type: Boolean,
            required: true
        },
        updateRole: {
            type: Boolean,
            required: true
        },
        deleteRole: {
            type: Boolean,
            required: true
        },
        responseDataElements: {
            type: Object,
            required: true
        },
        responseDataPerson: {
            type: Object,
            required: true
        },
        loading: {
            type: Boolean,
            required: true
        },
        addDriver: {
            type: Boolean,
            required: true
        },
        addConstructor: {
            type: Boolean,
            required: true
        },
        endPoint: {
            type: String,
            required: true
        },
        viewDriver: {
            type: Boolean,
            required: true
        },
        viewConstructor: {
            type: Boolean,
            required: true
        }
    },
    data: function () {
        return {
            // loading: false,
            // elements: [],
            // person: {},
            errorMessage: null,
            pageSize: 6,
            currentPage: 1,
            showComponent: true,
        }
    },
    computed: {
        totalPages() {
            return Math.ceil(this.responseDataElements.length / this.pageSize);
        },
        pagedElements() {
            const startIndex = (this.currentPage - 1) * this.pageSize;
            const endIndex = startIndex + this.pageSize;
            return this.responseDataElements.slice(startIndex, endIndex);
        }
    },
    // created: async function () {
    //     try {
    //         this.loading = true;
    //         let response = await ElementService.getAllElements();
    //         this.elements = response.data;
    //         let nresponse = await ElementService.getPerson();
    //         this.person = nresponse.data;

    //         this.loading = false;
    //     } catch (error) {
    //         this.errorMessage = error;
    //         this.loading = false;
    //     }
    // },
    methods: {
        changePage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
            }
        },
        toggleComponent() {
            this.showComponent = !this.showComponent;
        },
        resolveEvent(){
            console.log('Event');
        }
    }
}
</script>

<style scoped></style>