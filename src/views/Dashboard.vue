<template>
    <div class="nav-bar">
      <NavBar :titulo="person.name" :tipo="person.type" isDashPage />
    </div>
    
</template>

<script>
import { ElementService } from '../services/ElementService.js'
import NavBar from '../components/NavBar.vue'

export default {
    name: 'ElementManager',
    components: { NavBar },
    data: function () {
        return {
            loading: false,
            elements: [],
            person: {},
            errorMessage: null,
            pageSize: 6,
            currentPage: 1
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