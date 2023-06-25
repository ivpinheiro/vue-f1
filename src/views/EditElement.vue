<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">Edit Element</p>
                <p class="fst-italic">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sit amet laborum expedita libero sunt aspernatur animi eveniet! Nesciunt expedita eius consectetur inventore facilis pariatur consequuntur doloribus odit illo dolorem!
                </p>
            </div>
        </div>
    </div>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-4">
                <form>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Name">
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="ID">
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Country">
                    </div>
                    <div class="mb-2">
                        <input type="submit" class="btn btn-success" value="Update">
                    </div>
                </form>
            </div>
            <div class="col-md-4">
                <img src="../assets/img/person.png" class="contact-img" alt="person image">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'EditElement'
    }
</script>

<style scoped>

</style>