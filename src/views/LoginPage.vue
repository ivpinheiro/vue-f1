<template>
    <section class="gradient-custom">
        <div class="container align-items-center">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-xl-5">
              <div class="card bg-white text-dark" style="border-radius: 1rem;">
                <div class="card-body p-3 text-center">
      
                  <div class=" pb-5">
      
                    <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                    <p class="text-dark-50 mb-5">Please enter your login and password!</p>
      
                    <div class="form-outline form-dark mb-4">
                      <input type="email" id="typeEmailX" class="form-control form-control-lg" />
                      <label class="form-label" for="typeEmailX">Email</label>
                    </div>
      
                    <div class="form-outline form-dark mb-4">
                      <input type="password" id="typePasswordX" class="form-control form-control-lg" />
                      <label class="form-label" for="typePasswordX">Password</label>
                    </div>      
                    <button class="btn btn-lg px-5 btn btn-success" type="submit">Login</button>      
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>

<script>
export default {
    name: 'LoginPage',
    data() {
        return {
            input: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        login() {
            if (this.input.username != "" && this.input.password != "") {
                // This should actually be an api call not a check against this.$parent.mockAccount
                if (this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                    this.$emit("authenticated", true);
                    this.$router.replace({ name: "Secure" });
                } else {
                    console.log("The username and / or password is incorrect");
                }
            } else {
                console.log("A username and password must be present");
            }
        }
    }
}
</script>

<style scoped>
</style>