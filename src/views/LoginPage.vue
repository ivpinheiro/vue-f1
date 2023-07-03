<template>
    <NavBar titulo="Sistema da Fórmula 1" isLoginPage/>
    <section class="gradient-custom">
        <div class="container align-items-center">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-xl-5">
              <div class="card login-background text-dark" style="border-radius: 1rem;">
                <div class="card-body p-3 text-center">
      
                  <div class=" pb-5">
      
                    <h2 class="fw-bold mb-2 text-uppercase center">Login</h2>
                    <p class="text-dark-50 mb-3">Por favor, insira suas credenciais corretamente para ter acesso ao sistema!</p>
      
                    <div class="form-outline form-dark mb-4">
                      <input v-model="input.username" type="email" id="typeEmailX" class="form-control form-control-lg" placeholder="Login" @keypress="handleKeyPress" required/>
                    </div>
      
                    <div class="form-outline form-dark mb-4">
                      <input v-model="input.password" type="password" id="typePasswordX" class="form-control form-control-lg" placeholder="Senha" @keypress="handleKeyPress" required/>
                    </div>      
                    <button class="btn btn-lg px-5 btn btn-success" type="submit" @click="login()">Login</button>      
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>

<script>
import { ElementService } from '../services/ElementService.js'
import NavBar from '@/components/NavBar.vue';
export default {
    name: "LoginPage",
    data() {
        return {
            input: {
                username: "",
                password: ""
            }
        };
    },
    methods: {
        async login() {
            if (this.input.username != "" && this.input.password != "") {
              try{
                const response = await ElementService.authenticate(this.input);
                const token = response.data.token
                const permissoes = response.data.permissoes
                if(token){
                  localStorage.setItem('token', token);
                  localStorage.setItem('permissoes', permissoes);
                  this.$router.push('/')
                }
              }
              catch(e){
                alert("Login ou senha invalidos, por favor tente novamente!")
                console.log(e)
                console.log("Erro no login")
              }
            }
            else {
                alert("Um login e senha devem estar presentes!");
            }
        },
        handleKeyPress(event) {
          if (event.key === 'Enter') {
            this.login();
          }
        }
    },
    components: { NavBar }
}
</script>

<style scoped>
  h2{
    color: #198754;
  }
  input{
    text-align: center;
  }
  ::-webkit-input-placeholder {
    color: #C6C6C6;
    font-style: italic; 
    text-align: center;
  }
</style>