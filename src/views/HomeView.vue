<template>
    <div class="container">
      <h1>Minha Livaria Pessoal</h1>
      <ListaDeLivros  :listaLivro="listaLivro"/>
  </div>
</template>

<script>
import ListaDeLivros from '@/components/ListaDeLivros.vue'
import { useLoadlivros } from "@/firebase";

export default{
  components:{
    ListaDeLivros,
  },
  data() {
    return {
      listaLivro: [],

    };
  },
  mounted() {
    this.loadLivros();
    
  },
  methods: {
    loadLivros() {
      this.listaLivro = useLoadlivros();
    },
    
  },
}


</script>

<style scoped>
.container{
  text-align: center;
}

</style>