<template>
    <div class="card-view container-card card my-2 list-group-item-success shadow-lg ">
        <div class="card-body">
            <div class="row align-items-center">
                <div class="col-sm-4">
                    <img src="../assets/img/person.png" alt="" class="contact-img">
                </div>
                <div class="col-sm-7" v-if="viewConstructor">
                    <ul class="list-group">
                        <li class="list-group-item">
                            Ref. Construtor:
                            <span class="fw-bold">{{ element.constructorRef }}</span>
                        </li>
                        <li class="list-group-item">
                            Nome:
                            <span class="fw-bold">{{ element.name }}</span>
                        </li>
                        <li class="list-group-item">
                            Nacionalidade:
                            <span class="fw-bold">{{ element.nationality }}</span>
                        </li>
                        <li class="list-group-item">
                            URL:
                            <span class="fw-bold">{{ element.url }}</span>
                        </li>
                    </ul>
                </div>
                <div class="col-sm-7" v-if="viewDriver">
                    <ul class="list-group">
                        <li class="list-group-item">
                            Piloto Ref.:
                            <span class="fw-bold">{{ element.driverRef }}</span>
                        </li>
                        <li class="list-group-item">
                            Número:
                            <span class="fw-bold">{{ element.number }}</span>
                        </li>
                        <li class="list-group-item">
                            Código:
                            <span class="fw-bold">{{ element.code }}</span>
                        </li>
                        <li class="list-group-item">
                            Nome:
                            <span class="fw-bold">{{ element.forename }}</span>
                        </li>
                        <li class="list-group-item">
                            Sobrenome:
                            <span class="fw-bold">{{ element.surname }}</span>
                        </li>
                        <li class="list-group-item">
                            Data Nascimento:
                            <span class="fw-bold">{{ element.dob }}</span>
                        </li>
                        <li class="list-group-item">
                            Nacionalidade:
                            <span class="fw-bold">{{ element.nationality }}</span>
                        </li>
                    </ul>
                </div>
                <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                    <ModalElement btn-title="" :btn-opt="false" modal-title="Visualizar" :visible="false" variant="success" btn-class-external="btn btn-warning my-1" btn-class-internal="fa fa-eye" v-if="viewRole" title="Visualizar">
                        <ViewElement :element-id="element.id" :viewDriver="viewDriver" :viewConstructor="viewConstructor"/>
                    </ModalElement> 
                    <ModalElement btn-title="" :btn-opt="false" modal-title="Editar" :visible="false" variant="success" btn-class-external="btn btn-primary my-1" btn-class-internal="fa fa-pen" v-if="updateRole" title="Editar">
                        <EditElement :element-id="element.id"/>
                    </ModalElement>
                    <button v-if="deleteRole" class="btn btn-danger my-1" @click="clickDeleteElement(element.id)" title="Deletar">
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
  