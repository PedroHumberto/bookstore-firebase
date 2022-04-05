<template>
  <div class="container">
    <h2>Atualize: {{ livro.nome }}</h2>
     <Formulario :livro="livro" @submit.prevent="update" :msgErro="msgErro" :botao="'Editar'" />
  </div>
</template>

<script>
import { getlivro, updatelivro } from "@/firebase";
import Formulario from "../components/Formulario.vue";


export default {
  components:{
    Formulario
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