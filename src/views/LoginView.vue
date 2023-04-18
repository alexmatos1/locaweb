<template>
  <div class="div-img">
    <img class="img-logo" src="/img/logo.png" alt="">   
  </div>
  <div class="login">
    <h1>Entre na sua conta</h1>
    <p>Para acessar sua conta informe seu e-mail e senha</p>

    <div class="div-imput-login">
            <label class="label-login" for="cadastro">E-mail</label>
            <br>
            <input type="text" name="loginEmail" v-model="loginemail" placeholder="Seu e-mail">
    </div>
    <div class="div-imput-login">
            <label class="label-login" for="cadastro">Senha</label>
            <br>
            <input type="password" name="loginSenha" v-model="loginsenha" placeholder="Sua senha">
            <br>
            <label class="label-esqueci">Esqueci minha senha</label>
    </div>
    

    <button class="btn-login" @click="logar()">Fazer login</button>
  </div>
  <div class="label-cadastro">
    <label class="cadastro-texto">Ainda não tem conta? <router-link to="/plano" class="cadastro">Cadastre-se</router-link></label>
  </div>
</template> 

<script>
export default{
  name:'LoginView',
  data(){
    return{      
      logado: "",
      loginemail: "",
      loginsenha: "",      
    }
  },
  methods:{
    logar(){   
      let user = this.loginemail;
      let senha = this.loginsenha;

      fetch('https://fakestoreapi.com/auth/login',{
            method:"POST",
            headers: {
              "Content-Type": "application/json"
            },
            body:JSON.stringify(
                {
                  username: user,
                  password: senha                 
                }
            )
      })
        
      .then(res=> {
        if(res.ok == true){
          let logado = this.loginemail
          this.$router.push({
            name: "IndexView",
            state: {logado}
          })
        }
        else{
          alert('Usuário ou senha Incorreto(s)') 
        }
      })     
    }
  }
}
</script>

<style>
.img-logo{
  width: 156px;   
}
.div-img{
  background-color: #FAFAFC;
  text-align: center
}
.login { 
  padding-left: 5%;
  padding-top: 25px;
  text-align: left;  
  width: 617px;
  max-width: 617px;
  height: 492px;
  background-color: #FFFFFF;
  margin-left: auto;
  margin-right: auto;
}

.div-imput-login{
    text-align: left; 
    margin-top: 20px;
}

.label-login{
    font-size: 16px; 
    font-weight: 400;
}

.label-esqueci{  
  margin-left: 60%;
  font-size: 16px;
}

.div-imput-login{
    text-align: left; 
}

.btn-login{
  width: 90%;
  height: 70px;
  color: #FFF;
  border: none;
  border-radius: 5px;
  margin-top: 25px;
  text-transform: uppercase;
  background-color: #F30168;
  cursor: pointer;
}

input[type="text"] { 
    width: 90%;
    height: 70px;
    font-size: 20px;
    border-radius: 5px;
    border: 1px solid #DDE2E5;
}

input[type="password"] { 
    width: 90%;
    height: 70px;
    font-size: 20px;
    border-radius: 5px;
    border: 1px solid #DDE2E5;
}

.label-cadastro{
  text-align: center;
}

.cadastro-texto{  
  font-size: 18px;
  margin-top: 15px;
}

.cadastro{
  color: #F30168;
  cursor: pointer;
  font-size: 18px;
  margin-top: 15px;
}

@media screen and (max-width: 760px) {
  .login { 
    width: 90%;
  }  
}

@media screen and (max-width: 286px) {
  .label-cadastro { 
    margin-top: 75px;
  }  
}

</style>
