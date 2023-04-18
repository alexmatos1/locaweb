
<template>
  <HeaderCadastro></HeaderCadastro>

  <div>
    <div class="container">

      <div class="dados-pessoais">
        <p class="titulo-cadastro">Dados pessoais</p>
        <p class="info">Informe seus dados pessoais para acesso à sua conta</p>

        <div class="div-imput-cadastro">
          <label class="label-cadastro" for="cadastro">Nome completo</label>
          <br>
          <input type="text" name="loginNome" v-model="loginNome" placeholder="Informe seu nome completo">
        </div>
        <div class="div-imput-cadastro">
          <label class="label-cadastro" for="cadastro">Celular</label>
          <br>
          <input type="text" name="loginCeluar" v-model="loginCelular" placeholder="(99) 99999-0000">
          <br>
        </div>
        <div class="div-imput-cadastro">
          <label class="label-cadastro" for="cadastro">E-mail</label>
          <br>
          <input type="text" name="loginEmail" v-model="loginEmail" placeholder="Informe seu e-mail">
        </div>
        <div class="div-imput-cadastro">
          <label class="label-cadastro" for="cadastro">Senha</label>
          <br>
          <input type="text" name="loginSenha" v-model="loginSenha">
          <br>
          <label class="regra">No mínimo 8 caracteres</label>
        </div>

        

        <div class="div-imput-cadastro">
          <label class="label-cadastro" for="cadastro">Confirme sua senha</label>
          <br>
          <input type="text" name="loginConfirmarSenha" v-model="loginConfirmarSenha" placeholder="Sua senha">
          <br>
        </div>

        <hr class="linha">
        <p class="titulo-cadastro">Dados do seu site</p>        

        <div class="div-imput-cadastro">
          <label class="label-cadastro" for="cadastro">Nome do site</label>
          <br>
          <input type="text" name="loginNome" v-model="loginNome" placeholder="Meu site">
          <br>
          <label class="regra">Exatamente igual o título do seu site</label>
        </div>

        <hr class="linha">
        <div style="text-align: left;">
          <input type="checkbox" class="termo" checked>
        <label for="vehicle1"> Ao concluir com seu cadastro você concorda com nossos <br><span style="text-decoration: underline;">termos de uso e politicas de privacidade.</span></label>
        </div>

        <button class="cadastro-btn" @click="cadastrar">Criar conta</button>
      </div>
      
      <div class="div-plano">
        <p style="font-size: 14px; text-transform: uppercase; background-color: #000; color: #FFF; position: absolute; padding: 3px 16px 3px 17px; border-radius: 5px; margin-left: 95px; z-index: 1; margin-top: 5px;">plano escolhido</p>
        <PlanoUm v-if="planoSelecionado == 'um' "  mostrarBtn="um"></PlanoUm>  
        <PlanoDois v-if="planoSelecionado == 'dois' "  mostrarBtn="dois"></PlanoDois>  
        <PlanoTres v-if="planoSelecionado == 'tres' "  mostrarBtn="tres"></PlanoTres>
        <!-- <button class="btn-troca" @click="trocarPlano">Trocar Plano</button>  -->
        <div style="margin-top: -500px;">
          <button class="btn-troca" @click="trocarPlano">Trocar Plano 2</button>
        </div>
      </div>  
      
      
    </div>
  </div>
</template>

<script>
import HeaderCadastro from '../components/HeaderCadastro.vue';
import PlanoUm from '../components/PlanoUm.vue';
import PlanoDois from '../components/PlanoDois.vue';
import PlanoTres from '../components/PlanoTres.vue';

export default{
  name:'CadastroView',
  components:{
    HeaderCadastro,
    PlanoUm,
    PlanoDois,
    PlanoTres
  }, 
  data(){
      return{
        planoSelecionado: "",
        loginNome: "",
        loginCelular: "",
        loginEmail: "",
        loginSenha: "",
        loginConfirmarSenha: ""
      }      
    },
    methods:{    
      mudarPlano(){         
        let plano = history.state.plano;         
        if(plano == 'um'){
          this.planoSelecionado = "um"
        }
        if(plano == 'dois'){
          this.planoSelecionado = "dois"
        }
        else if(plano == 'tres'){
          this.planoSelecionado = "tres"
        }        
      },

      trocarPlano(){
        this.$router.push({
          name: "PlanoView",
        })
      },

      cadastrar(){
        fetch('https://fakestoreapi.com/users',{
            method:"POST",
            body:JSON.stringify(
                {
                    email:'John@gmail.com',
                    username:'johnd',
                    password:'m38rmF$',
                    name:{
                        firstname:'John',
                        lastname:'Doe'
                    },
                    address:{
                        city:'kilcoole',
                        street:'7835 new road',
                        number:3,
                        zipcode:'12926-3874',
                        geolocation:{
                            lat:'-37.3159',
                            long:'81.1496'
                        }
                    },
                    phone:'1-570-236-7033'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))

            let logado = 'johnd'
              this.$router.push({
                name: "IndexView",
                state: {logado}
              })
      }
    },
    mounted() {
      this.mudarPlano();
    }  
}
</script>


<style scoped>
.container {
  color:#292D32;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  height: 1036px;
  margin-bottom: 30px;
  width: 1119px;  
}

.dados-pessoais{
  width: 617px; 
  background-color: #FFF; 
  margin-right: auto; 
  margin-left: auto; 
  padding-left: 60px;
}

.titulo-cadastro{
  font-size: 28px;
  font-weight: 700;
  text-align: left;
}

.img-logo{
  margin-top: 0px !important;
}

.info{
  font-size: 18px;
  font-weight: 400;
  text-align: left;
}

.div-imput-cadastro{
    text-align: left; 
    margin-top: 20px;
}

.label-cadastro{
    font-size: 16px; 
    font-weight: 400;
}

.label-esqueci{  
  margin-left: 330px;
  font-size: 16px;
}

.div-imput-cadastro{
    text-align: left; 
}

input[type="text"] { 
    width: 90%;
    height: 60px;
    font-size: 20px;
    border-radius: 5px;
    border: 1px solid #DDE2E5;
}

.regra{
  color: #515D74;
  font-size: 14px;
}

hr.linha{
  width:100% !important; 
  margin-top: 25px !important;
  margin-left: -30px !important; 
  border: 1px solid rgba(81, 93, 116, 0.3) !important;
}

.cadastro-btn{
  width: 90%;
  margin-top: 20px;
  background-color: #F30168;
  text-transform: uppercase;
  color: #FFF;
  padding: 18px 24px 18px 24px;
  border: none;
  cursor: pointer;
  margin-bottom: 25px;
  margin-left: -55px !important;
}

.termo{
  accent-color:#F30168;
}

.div-plano{
  height: 950px; 
  overflow: hidden;
}
.btn-troca{
  width: 80%; 
  font-size: 16px; 
  font-weight: 400; 
  padding: 15px 30px 15px 30px; 
  margin-top: 110px;
  cursor: pointer;
  background-color: #FFF;
  border-radius: 5px;
}

@media screen and (max-width: 760px) {
  .container {
    flex-direction: column; 
    height: auto;
    width: 100%;
  }
  .div-plano{
    width: 100%;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
  }
  .btn-troca{
    width: 30%;  
    margin-right: 315px; 
    min-width: 245px;
  }
  .dados-pessoais{
  width: 90%; 
  background-color: #FFF; 
  margin-right: auto; 
  margin-left: auto; 
  padding-left: 60px;
}

}

</style>
