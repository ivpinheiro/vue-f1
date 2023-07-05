<template>
    <div class="add-element">
        <div class="container mt-3">
            <div class="row">
                <div class="col">
                    <p class="h3 text-success fw-bold">Inserir</p>
                    <p class="fst-italic" style="font-size: 15px;">
                        Adicione novos elementos à sua base de dados com facilidade usando o modal de adição.
                    </p>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row" v-if="addConstructor">
                <div class="col-md-8">
                    <form @submit.prevent="submitCreate()">
                        <div class="mb-2">
                            <input v-model="element.constructorRef" type="text" class="form-control" placeholder="Ref. Construtor" required>
                        </div>
                        <div class="mb-2">
                            <input v-model="element.name" type="text" class="form-control" placeholder="Nome" required>
                        </div>
                        <div class="mb-2">
                            <input v-model="element.nationality" type="text" class="form-control" placeholder="Nacionalidade"
                                required>
                        </div>
                        <div class="mb-2">
                            <input v-model="element.url" type="text" class="form-control" placeholder="URL"
                                required>
                        </div>
                        <div class="mb-2 col-md-1">
                            <input type="submit" class="btn btn-success" value="Criar">
                        </div>
                    </form>
                </div>
                <div class="col-md-4">
                    <img src="../assets/img/person.png" class="contact-img" alt="person image">
                </div>
            </div>
            <div class="row" v-if="addDriver">
                <div class="col-md-8">
                    <form @submit.prevent="submitCreate()">
                        <div class="mb-2">
                            <input v-model="element.driverRef" type="text" class="form-control" placeholder="Piloto Ref." required>
                        </div>
                        <div class="mb-2">
                            <input v-model="element.number" type="number" class="form-control" placeholder="Número" required>
                        </div>
                        <div class="mb-2">
                            <input v-model="element.code" type="text" class="form-control" placeholder="Código"
                                required>
                        </div>
                        <div class="mb-2">
                            <input v-model="element.forename" type="text" class="form-control" placeholder="Nome"
                                required>
                        </div>
                        <div class="mb-2">
                            <input v-model="element.surname" type="text" class="form-control" placeholder="Sobrenome"
                                required>
                        </div>
                        <div class="mb-2">
                            <input v-model="element.dob" type="text" class="form-control" placeholder="Data Nascimento"
                                required>
                        </div>
                        <div class="mb-2">
                            <input v-model="element.nationality" type="text" class="form-control" placeholder="Nacionalidade"
                                required>
                        </div>
                        <div class="mb-2 col-md-1">
                            <input type="submit" class="btn btn-success" value="Criar">
                        </div>
                    </form>
                </div>
                <div class="col-md-4">
                    <img src="../assets/img/person.png" class="contact-img" alt="person image">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/** 
 * GroupID list is not configurable
 */
import { ElementService } from '../services/ElementService.js'
export default {
    name: 'AddElement',
    data: function () {
        return {
            element: {
                name: '',
                id: '',
                country: '',
                groupId: ''
            },
            groups: []
        }
    },
    props: {
        endPoint: {
            type: String,
            required: true
        },
        addDriver: {
            type: Boolean,
            required: true
        },
        addConstructor: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        submitCreate: async function () {
            try {
                let response = await ElementService.createElement(this.element, this.endPoint);
                if (response) {
                    return this.$router.push('/');
                } else {
                    return this.$router.push('/elements/add');
                }
            } catch (error) {
                console.error(error);
            }
        }
    },
}
</script>

<style scoped></style>