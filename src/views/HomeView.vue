<template>
    <div class="container">
      <h1>Minha Livaria Pessoal</h1>
      <h2>Meus Livros</h2>
      
      <ListaDeLivros/>
  </div>
</template>

<script>
import ListaDeLivros from '@/components/ListaDeLivros.vue'

export default{
  components:{
    ListaDeLivros,
    
  }
}


</script>

<style>

</style>