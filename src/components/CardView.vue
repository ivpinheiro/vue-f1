<template>
    <div class="container-card card my-2 list-group-item-success shadow-lg">
        <div class="card-body">
            <div class="row align-items-center">
                <div class="col-sm-4">
                    <img src="../assets/img/person.png" alt="" class="contact-img">
                </div>
                <div class="col-sm-7">
                    <ul class="list-group">
                        <li class="list-group-item">
                            Name:
                            <span class="fw-bold">{{ element.name }}</span>
                        </li>
                        <li class="list-group-item">
                            ID:
                            <span class="fw-bold">{{ element.id }}</span>
                        </li>
                        <li class="list-group-item">
                            Country:
                            <span class="fw-bold">{{ element.country }}</span>
                        </li>
                    </ul>
                </div>
                <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                    <router-link v-if="viewRole" :to="`/elements/view/${element.id}`" class="btn btn-warning my-1">
                        <i class="fa fa-eye"></i>
                    </router-link>
                    <router-link v-if="updateRole" :to="`/elements/edit/${element.id}`" class="btn btn-primary my-1">
                        <i class="fa fa-pen"></i>
                    </router-link>
                    <button v-if="deleteRole" class="btn btn-danger my-1" @click="clickDeleteElement(element.id)">
                        <i class="fa fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { ElementService } from '../services/ElementService.js'
export default {
    props: {
        element: {
            type: Object,
            required: true
        },
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
        }
    },
    methods: {
        clickDeleteElement: async function (elementId) {
            try {
                this.loading = true;
                let response = await ElementService.deleteElement(elementId);
                if (response) {
                    let response = await ElementService.getAllElements();
                    this.elements = response.data;
                    this.loading = false;
                }
                this.loading = false;

            } catch (error) {
                this.errorMessage = error;
                this.loading = false;
            }
        }
    }
};
</script>
  