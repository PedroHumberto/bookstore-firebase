<template>
  <div class="container">
    <h1>Edite um Livro</h1>
    <form @submit.prevent="update">
      <label for="name">Nome:</label>
      <input type="text" id="name" v-model="livro.nome" />
      <label for="name">Autor:</label>
      <input type="text" id="name" v-model="livro.autor" />
      <label for="url">URL:</label>
      <input type="text" id="url" v-model="livro.url" />
      <label for="genero">Genero:</label>
      <select v-model="livro.genero">
        <option value="Drama">Drama</option>
        <option value="Ficção">Ficção</option>
        <option value="Terror">Terror</option>
        <option value="Romance">Romance</option>
        <option value="Comedia">Comedia</option>
      </select>
      <label for="descricao">Descrição</label>
      <input type="text" id="descricao" v-model="livro.descricao" />
      <button type="submit">Alterar</button>
    </form>
  </div>
</template>

<script>
import { getlivro, updatelivro } from "@/firebase";

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
      livroId: this.$route.params.id,
    };
  },
  async mounted() {
    const meuLivro = await getlivro(this.livroId);
    console.log(meuLivro);
    this.livro.nome = meuLivro.nome;
    this.livro.autor = meuLivro.autor;
    this.livro.url = meuLivro.url;
    this.livro.genero = meuLivro.genero;
    this.livro.descricao = meuLivro.descricao;
  },
  methods: {
    async update() {
      await updatelivro(this.livroId, { ...this.livro });
      this.$router.push("/");
      this.livro.nome = "";
      this.livro.autor = "";
      this.livro.url = "";
      this.livro.genero = "";
      this.livro.descricao = "";
    },
  },
};
</script>

<style scoped>

.container{
    width:500px;
}
.container form {
  display: flex;
  flex-direction: column;
}

</style>