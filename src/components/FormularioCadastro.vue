<template>
  <div class="container">
    <h1>Cadastre um Livro</h1>
    <form @submit.prevent="cadastrar">
      <label for="name">Nome:</label>
      <input type="text" id="name" v-model="livro.nome" />
      <label for="name">Autor:</label>
      <input type="text" id="name" v-model="livro.autor" />
      <label for="url">URL:</label>
      <input type="text" id="url" v-model="livro.url" />
      <label for="genero">Genero:</label>
      <select v-model="livro.genero">
        <option>Todos</option>
        <option value="Drama"> Drama</option>
        <option value="Ficção">Ficção</option>
        <option value="Terror">Terror</option>
        <option value="Romance">Romance</option>
        <option value="Comedia">Comedia</option>
      </select>
      <label for="descricao">Descrição</label>
      <input type="text" id="descricao" v-model="livro.descricao" />
      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
import { getDatabase, ref, set } from "firebase/database";

export default {

  data() {
    return {
      
      livro: {
        nome: "",
        autor: "",
        url: "",
        genero: "",
        descricao: "",
      },
      id: this.$route.params.id
    };
  },
  mounted(){
    console.log(this.id)
  },
  
  methods: {
    //CRIAR VALIDAÇÃO DO FORMULARIO
    cadastrar() {
      const livros = this.livro;
      const db = getDatabase();

      set(ref(db, "/livros/" + livros.nome), {
        nome: livros.nome,
        autor: livros.autor,
        url: livros.url,
        genero: livros.genero,
        descricao: livros.descricao,
      });
    },
  },
  created(){
    if(this.id){
      this.livro.nome = this.id
    }
  }
};
</script>

<style scoped>
.container form {
  display: flex;
  flex-direction: column;
}
</style>