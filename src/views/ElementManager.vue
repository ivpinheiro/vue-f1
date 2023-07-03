<template>
    <NavBar :titulo="person.name" :tipo="person.type" isHomePage />

    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">Element Manager
                    <router-link to="/elements/add" class="btn btn-success btn-sm">
                        <i class="fa fa-plus-circle">
                            New
                        </i>
                    </router-link>
                </p>
                <p class="fst-italic">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eaque saepe libero, porro alias dolore
                    maxime, ea sit voluptas vitae consequuntur suscipit corrupti aliquam natus nisi ad. Aperiam, quae ab?
                </p>
                <form>
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
                </form>
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
                    <CardView :element="element" :view-role="viewRole" :update-role="updateRole" :delete-role="deleteRole"></CardView>
                </div>
            </div>
        </div>

        <PaginationTable :total-pages="totalPages" :current-page="currentPage" :change-page="changePage"></PaginationTable>
    </div>
</template>

<script>
import { ElementService } from '../services/ElementService.js'
import CardView from '../components/CardView.vue';
import PaginationTable from '../components/PaginationTable.vue';
import SpinnerLoader from '../components/SpinnerLoader.vue'
import NavBar from '../components/NavBar.vue'

export default {
    name: 'ElementManager',
    components: { SpinnerLoader, CardView, PaginationTable, NavBar },
    data: function () {
        return {
            loading: false,
            elements: [],
            person: {},
            errorMessage: null,
            pageSize: 6,
            currentPage: 1,
            viewRole: true,
            updateRole: true,
            deleteRole: false
        }
    },
    computed: {
        totalPages() {
            return Math.ceil(this.elements.length / this.pageSize);
        },
        pagedElements() {
            const startIndex = (this.currentPage - 1) * this.pageSize;
            const endIndex = startIndex + this.pageSize;
            return this.elements.slice(startIndex, endIndex);
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
    },
    methods: {
        changePage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
            }
        }
    }
}
</script>

<style scoped></style>