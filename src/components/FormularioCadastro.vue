<template>
  <div class="container">
    <h2>Cadastre um Livro</h2>
     <img :src="livro.url" :alt="livro.descricao" :title="livro.nome">
    <form @submit.prevent="cadastrar">
      <MsgErro :msgErro="msgErro"/>
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
      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
//TESTE DE COMPOSITION
import { createlivro } from "@/firebase";
import { reactive } from "vue";
import MsgErro from './MensagemErro.vue'

export default {
  components:{
    MsgErro
  },
  setup() {
    const livro = reactive({
      nome: "",
      autor: "",
      url: "",
      genero: "Drama",
      descricao: "",
    });
    const msgErro = reactive([]);

    const cadastrar = async () => {
      if (!livro.nome) {
        return msgErro.push("Nome Obrigatório");
      }
      if (!livro.autor) {
        return msgErro.push("Autor Obrigatório");
      }
      if (!livro.url) {
        return msgErro.push("URL Obrigatório");
      }
      if (!livro.descricao) {
        return msgErro.push("Descrição Obrigatória");
      }
      await createlivro({ ...livro });
      livro.nome = "";
      livro.autor = "";
      livro.url = "";
      livro.genero = "";
      livro.descricao = "";
    };
    return { livro, cadastrar, msgErro };
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
.erro{
  color: red
}
button {
  background-color: #4caf50; /* Green */
  border: none;
  border-radius: 10px;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}
input {
  width: 500px;
}
img {
  width: 50%;
}
</style>