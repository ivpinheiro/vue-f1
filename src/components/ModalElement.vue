<template>
    <div :class="btnClassExternal"  @click="openCloseFun()">
        <i :class="btnClassInternal" data-toggle="modal" data-target="#exampleModal">
            {{btnTitle}}
        </i>
    </div>

    <div v-if="openClose" class="modal fade show" id="exampleModal" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLabel" aria-hidden="true" style="display:block">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{ modalTitle }}</h5>
                    <button type="button" class="close close-button" data-dismiss="modal" aria-label="Close"
                        @click="openCloseFun()">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <slot>
                        
                    </slot>
                </div>
                <div class="modal-footer">
                    <button type="button" :class="'btn btn-' + variant" data-dismiss="modal"
                        @click="openCloseFun()">Close</button>
                    <button v-if="btnOpt" type="button" class="btn btn-primary">{{btnOptTitle}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddElementModal",
    props: {
        btnTitle: {
            type: String,
            required: true
        },
        btnOpt :{
            type: Boolean,
            required: true
        },
        btnOptTitle:{
            type: String,
            required: false
        },
        modalTitle: {
            type: String,
            required: true
        },
        visible: {
            type: Boolean,
            required: true
        },
        variant: {
            type: String,
            required: true
        },
        btnClassExternal: {
            type: String,
            required: true
        },
        btnClassInternal: {
            type: String,
            required: true
        },

    },
    data() {
        return {
            openClose: this.visible
        }
    },
    methods: {
        openCloseFun() {
            this.openClose = !this.openClose;
        }
    },
    watch: {
        visible: function (newValue) {
            this.openClose = newValue;
        }
    }
}
</script>

<style scoped>
.close-button {
    background-color: transparent;
    border-color: transparent;
    font-size: 25px;
}
</style>