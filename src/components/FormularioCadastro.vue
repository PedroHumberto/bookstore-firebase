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
//TESTE DE COMPOSITION
import { createlivro } from '@/firebase'
import { reactive } from 'vue'

export default {

  setup() {
    const livro = reactive({ nome: '', autor: '', url:'', genero:'', descricao:'' })

    const cadastrar = async () => {
      await createlivro({ ...livro })
      livro.nome = ''
      livro.autor = ''
      livro.url = ''
      livro.genero = ''
      livro.descricao = ''
    }
    return { livro, cadastrar }
  }
}
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