<template>
    <div class="container mt-3 text-center pagination-table"> <!-- Adicione a classe "text-center" para centralizar todo o conteúdo -->
        <nav v-if="totalPages > 1">
            <ul class="pagination justify-content-center pagination-lg">
                <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
                    <a class="page-link custom-link" href="#" @click="changePage(1)">Primeiro</a>
                </li>
                <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
                    <a class="page-link custom-link" href="#" @click="changePage(currentPage - 1)">Anterior</a>
                </li>
                <li class="page-item" v-if="currentPage > 2" :key="currentPage-2">
                    <a class="page-link custom-link" href="#" @click="changePage(currentPage-2)">{{ currentPage - 2 }}</a>
                </li>
                <li class="page-item" v-if="currentPage > 1" :key="currentPage-1">
                    <a class="page-link custom-link" href="#" @click="changePage(currentPage-1)">{{ currentPage - 1 }}</a>
                </li>
                <li class="page-item active" v-if="totalPages > 1" :key="currentPage">
                    <a class="page-link custom-link" href="#" @click="changePage(currentPage)">{{ currentPage }}</a>
                </li>
                <li class="page-item" v-if="totalPages > currentPage" :key="currentPage+1">
                    <a class="page-link custom-link" href="#" @click="changePage(currentPage+1)">{{ currentPage + 1 }}</a>
                </li>
                <li class="page-item" v-if="totalPages > currentPage + 1" :key="currentPage+2">
                    <a class="page-link custom-link" href="#" @click="changePage(currentPage+2)">{{ currentPage + 2 }}</a>
                </li>
                <!--
                    <li class="page-item" v-for="page in totalPages" :key="page" :class="{ 'active': currentPage === page }">
                        <a class="page-link custom-link" href="#" @click="changePage(page)">{{ page }}</a>
                    </li>
                -->
                <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
                    <a class="page-link custom-link" href="#" @click="changePage(currentPage + 1)">Próximo</a>
                </li>
                <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
                    <a class="page-link custom-link" href="#" @click="changePage(totalPages)">Último</a>
                </li>
            </ul>
        </nav>
    </div>
</template>
  
<script>
export default {
    props: {
        totalPages: {
            type: Number,
            required: true
        },
        currentPage: {
            type: Number,
            required: true
        },
        changePage: {
            type: Function,
            required: true
        }
    }
};
</script>
  
<style scoped>
.custom-link {
    background-color: #198754;
    /* Defina a cor de fundo dos links */
    color: #ffffff;
    /* Defina a cor do texto dos links */
}
</style>

  