<template>
  <div class="container">
    <h2>{{ livro.nome }}</h2>
    <img :src="livro.url" :alt="livro.descricao" :title="livro.nome" />
    <MsgErro :msgErro="msgErro"/>
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
        <option value="Aventura">Aventura</option>
      </select>
      <label for="descricao">Descrição</label>
      <input type="text" id="descricao" v-model="livro.descricao" />
      <button class="verde" type="submit">Alterar</button>
    </form>
  </div>
</template>

<script>
import { getlivro, updatelivro } from "@/firebase";
import MsgErro from '../components/MensagemErro.vue'


export default {
  components:{
    MsgErro
  },
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
      msgErro: []
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
       if (!this.livro.nome) {
        return this.msgErro.push("Nome Obrigatorio");
      }
      if (!this.livro.autor) {
        return this.msgErro.push("Autor Obrigatorio");
      }
      if (!this.livro.url) {
        return this.msgErro.push("URL Obrigatorio");
      }
      if (!this.livro.descricao) {
        return this.msgErro.push("Descrição Obrigatoria");
      }
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container form {
  display: flex;
  flex-direction: column;
}
input {
  width: 500px;
}
img {
  width: 40%;
}
.erro{
  color:red
}
button{
  background-color: #4caf50; /* Green */
  border: none;
  border-radius: 10px;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}
</style>