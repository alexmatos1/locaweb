
<template>
  <div class="cards-2">
    <p v-if="mostrarBtn !== 'dois'"  style="font-size: 14px; text-transform: uppercase; background-color: #10C300; color: #FFF; position: absolute; padding: 5px 15px 5px 16px; border-radius: 10px; margin-left: 120px; z-index: 1; margin-top: -10px;">Mais usado</p>
    <p class="card-titulo">Hospedagem 2</p>
    <p class="card-plano-texto">R$<span class="card-plano">499</span>/mês</p>
    <p class="card-taxa">cobrando mensalmente</p>
    <p class="card-taxa">sem taxa de set  up</p>
    <div class="card-ideal">
      <p class="card-ideal-text">ideal para site com mais</p>
      <p class="card-ideal-text">de 30k de visitas</p>
    </div>

    <button v-if="mostrarBtn !== 'dois'" class="card-btn" @click="planoEscolhido">Escolher esse plano</button>

    <div class="div-servidor">
      <p class="card-servidor">Seu site em servidores no </p>
      <p class="card-servidor-texto">Brasil.</p>
    </div>

    <ul>
      <li>Servidores em nosso de São Paulo;</li>
      <li>ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0;</li>
      <li>10 usuário de FTP para upload ou download;</li>
      <li>30 contas de e-mails profissionais;</li>
      <li>10 bdomínio gratuito;</li>
    </ul>

    <div class="div-servidor mt">
      <p class="card-servidor">Suporte 24 horas, 7 dias por </p>
      <p class="card-servidor-suporte">semana grátis;</p>
      <p class="card-servidor-suporte mt">Aplicativos disponíveis;</p>
    </div>     
    
    <ul>
      <li>Wordpress;</li>
      <li>Drupal;</li>
      <li>entre outros...</li>
    </ul>

    <div class="div-servidor mt">
      <p class="card-servidor-suporte">Migração Gratuita;</p>
    </div>

    <ul>
      <li>Migramos todos seus sites para nossos servidores;</li>         
    </ul>

    <div class="div-servidor mt">
      <p class="card-servidor-suporte">Você ainda tem</p>
    </div>

    <ul>
      <li>Webmail RoundCube;</li>
      <li>AntiSpam;</li>
      <li>Painel de gerenciamento de DNS;</li>
      <li>Painel de controle web;</li>
      <li>Configurações de PHP personalizáveis;</li>
      <li>Certificado SSL Grátis;</li>
      <li>Transferência ilimitada.</li>
    </ul>
        
  </div>
</template>
  
  <script>
  export default{
    name:'PlanoDois',
    props:{
      mostrarBtn: String
    },
    methods:{
      planoEscolhido(){
        let plano = "dois";        
        this.$router.push({
          name: "CadastroView", 
          state: {plano}
      })
      }
    }
  }
  </script>
  
  
  <style scoped>
  .img-logo{
    width: 156px; 
    margin-top: 50px;
  }
  .div-img{
    background-color: #FAFAFC;
    text-align: center
  }

  .titulo-site{
    font-size: 28px;
    color: #292D32;
    font-weight: 700;
  }

  .hospedar-site{
    font-size: 28px;
    color: #F30168;
    font-weight: 700;
    text-decoration: underline ;
  }

  .mb{
    margin-bottom: 20px;
  }


  




  .cards{
  width: 348px;
  background-color: #FFF;
  margin-right: 2%;
  height: 1262px;
}

.cards-2{
  width: 348px;
  background-color: #FFF;
  margin-right: 2%;
  margin-bottom: 30px;
}

.card-titulo{
  font-size: 26px; 
  font-weight: 700; 
  color: #666666;
  margin-top: 25px;
}

.card-plano{
  color: #F30168; 
  font-size: 34px; 
  font-weight: 700;
}
.card-plano-texto{
  color: #F30168; 
  font-size: 20px; 
  font-weight: 400;
}

.card-taxa{
  font-size: 14px;
  font-weight: 400;
}

.card-ideal{
  margin-top: 20px; 
  margin-bottom: 20px; 
  padding-top: 15px; 
  padding-bottom: 15px;
  width: 80%; 
  margin-left: 10%; 
  border-top: 1px solid rgba(196, 196, 196, 0.5); 
  border-bottom:  1px solid rgba(196, 196, 196, 0.5);
}

.card-ideal-text{
  font-size: 17px;
  font-weight: 400;
}

.card-btn{
  background-color: #F30168;
  text-transform: uppercase;
  color: #FFF;
  padding: 18px 24px 18px 24px;
  border: none;
  cursor: pointer;
  margin-bottom: 25px;
}

.card-servidor{
  font-size: 17px;
  font-weight: 700;
}

.card-servidor-texto{
  font-size: 17px;
  font-weight: 700;
  text-align: left; 
  margin-left: 20px;
}

.card-servidor-suporte{
  font-size: 17px;
  font-weight: 700;
  text-align: left; 
  margin-left: 10px;
}


ul{
  width: 80%; 
  margin-left: 10%;
  text-align: initial;
}

ul li{
  list-style-type: '✔ ';
  font-size: 17px;
}

.mt{
  margin-top: 15px;
}

.div-servidor{
  width: 70% ;
  margin-left: 15%;
}

.img-logo{
  width: 156px; 
  margin-top: 50px;
}
.div-img{
  background-color: #FAFAFC;
  text-align: center
}
  </style>
  