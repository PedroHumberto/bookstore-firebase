<template>
<h2>Cadastre seu Livro</h2>
  <Formulario :livro="livro" @submit.prevent="cadastrar" :msgErro="msgErro" :botao="'Cadastrar'" />
</template>

<script>
import Formulario from "../components/Formulario.vue";
import { reactive } from "vue";
import { createlivro } from "@/firebase";
export default {
  components: {
    Formulario,
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

<style>
</style>