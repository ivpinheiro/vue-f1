<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">View Element</p>
                <p class="fst-italic">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sit amet laborum expedita libero sunt aspernatur animi eveniet! Nesciunt expedita eius consectetur inventore facilis pariatur consequuntur doloribus odit illo dolorem!
                </p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-4">
                <img src="../assets/img/person.png" class="contact-img-big" alt="person image">
            </div>
            <div class="col-md-6">
                <ul class="list-group">
                    <li class="list-group-item">Name: <span class="fw-bold">Name</span> </li>
                    <li class="list-group-item">ID: <span class="fw-bold">ID</span></li>
                    <li class="list-group-item">Country: <span class="fw-bold">Country</span></li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <router-link to="/" class="btn btn-success"><i class="fa fa-arrow-alt-circle-left"></i> Back</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ViewElement'
    }
</script>

<style scoped>

</style>