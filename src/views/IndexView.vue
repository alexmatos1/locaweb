<template>
    <header v-if="nome !== ''">
        <div>
            <img class="img-logo" src="img/logo.png" alt="">
        </div>
        <div class="div-logout">
            <p class="btn-user" @click="btnUser">{{letra}}</p>
            <button v-if="btnSair" class="btn-logout" @click="logOut" style="">Sair</button>
        </div>
    </header>
    <body v-if="nome !== ''" style="margin-left: 300px;">
        <p class="saudacao">Olá {{ nome }},</p> 
        <p class="saudacao2">Seja bem vindo a sua conta de hospedagem.</p>

        <iframe width="976" height="654" src="https://www.youtube.com/embed/fpa2W3YNg0Q" title="LocaWeb" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
        <p class="duvidas">Caso tenha alguma dúvida, visite nossa central de ajuda.</p>
    </body>
</template>

<script>
    export default{
        name:'IndexView',
        data(){
            return{        
                nome:"",
                letra: "",
                btnSair: false
            }
        },
        methods:{    
            inicial(){
                this.letra = this.nome.charAt(0).toUpperCase();
            },
            btnUser(){
                this.btnSair = !this.btnSair;
            },
            autenticado(){
                let login = history.state.logado; 
                

                fetch('https://fakestoreapi.com/users')
                .then(res=>res.json())           
                .then(json=> {
                    let usuarios = json;

                    usuarios.forEach((item) => {                   
                        if(login == item.username){
                            this.nome = item.name.firstname
                            this.inicial()
                        }                     
                        else if(history.state.logado === undefined){
                            this.$router.push({
                                name: "LoginView",
                            })  
                        }                      
                    })               
                })             
                                
            },
            logOut(){
                this.$router.push({
                    name: "LoginView",
                })
            }     
        },
        mounted() {
            this.autenticado()
        } 
    }
   
</script>

<style scoped>
    header{
        display: flex;
        justify-content: space-between;
    }
    .img-logo{
        width: 156px; 
        margin-left: 30px;
    }

    .div-logout{
        margin-top: 40px;
        height: 95px;
        margin-right: 30px;
    }

    .btn-logout{
        font-size: 16px; 
        font-weight: 400; 
        border: none; 
        border-radius: 5px; 
        margin-left: 5px; 
        margin-top: 10px; 
        cursor: pointer;
        background-color: #FFF;
    }

    body{
        color: #292D32
    }

    .btn-user{        
        font-size: 18px;
        color: black;
        border-radius: 50%;
        background-color: rgb(217, 217, 217);
        margin-right: 20px;
        padding-top: 10px;
        padding-left: 20px;
        width: 52px;
        height: 52px;
        cursor: pointer;
        color: #FFFFFF;
        font-weight: 700;
    }
    .saudacao{
        font-size: 28px; 
        font-weight: 700;
    }
    .saudacao2{
        font-size: 16px; 
        font-weight: 400;
        margin-bottom: 30px;
    }
    .duvidas{
        font-size: 16px; 
        font-weight: 400;
        margin-bottom: 30px;
        margin-top: 20px;
    }
</style>