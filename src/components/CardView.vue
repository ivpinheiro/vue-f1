<template>
    <div class="card-view container-card card my-2 list-group-item-success shadow-lg ">
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
                    <ModalElement btn-title="" :btn-opt="false" modal-title="View Element" :visible="false" variant="success" btn-class-external="btn btn-warning my-1" btn-class-internal="fa fa-eye" v-if="viewRole">
                        <ViewElement :element-id="element.id"/>
                    </ModalElement> 
                    <ModalElement btn-title="" :btn-opt="false" modal-title="View Element" :visible="false" variant="success" btn-class-external="btn btn-primary my-1" btn-class-internal="fa fa-pen" v-if="updateRole">
                        <EditElement :element-id="element.id"/>
                    </ModalElement>
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
import ViewElement from './ViewElement.vue'
import EditElement from './EditElement.vue'
import ModalElement from '../components/ModalElement.vue'
export default {
    name: 'CardView',
    components: { ModalElement, ViewElement, EditElement },
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
  