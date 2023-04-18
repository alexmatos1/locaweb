
<template>
    <div class="div-img">
      <img class="img-logo" src="img/logo.png" alt="">   
      <p class="titulo-site">Você está muito próximo de mudar a forma de </p>
      <p class="hospedar-site">hospedar seu site</p>
      <p class="mb">Escolha o seu plano</p>
    </div>
  </template>
  
  <script>
  export default{
    name:'HeaderCadastro'
  }
  </script>
  
  
  <style>
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
  </style>
  