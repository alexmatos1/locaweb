
<template>
  <HeaderCadastro></HeaderCadastro>

  <div>
    <div class="container">
      
      <PlanoUm class="mb-card"></PlanoUm>

      <PlanoDois class="mb-card"></PlanoDois>

      <PlanoTres></PlanoTres>    
      
    </div>
  </div>
</template>

<script>
import HeaderCadastro from '../components/HeaderCadastro.vue';
import PlanoUm from '../components/PlanoUm.vue';
import PlanoDois from '../components/PlanoDois.vue';
import PlanoTres from '../components/PlanoTres.vue';

export default{
  name:'PlanoView',
  components:{
    HeaderCadastro,
    PlanoUm,
    PlanoDois,
    PlanoTres
  }
}
</script>


<style>
.container {
  color:#666666;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  height: 1350px;
  margin-bottom: 30px;
  width: 1119px;  
}

@media screen and (max-width: 760px) {
  .container{
    flex-direction: column; 
  }
  .mb-card{
    margin-bottom: 50px;
  }
}

</style>
