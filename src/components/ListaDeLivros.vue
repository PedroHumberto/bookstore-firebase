<template>
  <div class="container">
    <h3>Genero:</h3>
    <select v-model="filtro" @change="filtraLivro()">
      <option selected value="Todos">Todos</option>
      <option value="Drama">Drama</option>
      <option value="Ficção">Ficção</option>
      <option value="Terror">Terror</option>
      <option value="Romance">Romance</option>
      <option value="Comedia">Comedia</option>
    </select>
    <ul>
      <li v-for="livro in livros" :key="livro.id">
        <img :src="livro.url" alt="" />
        <h2>Nome: {{ livro.nome }}</h2>
        <p>Autor: {{ livro.autor }}</p>
        <p>Genero: {{ livro.genero }}</p>
        <p>Descrição: {{ livro.descricao }}</p>
        <router-link :to="{ name: 'altera', params: { id: livro.id }}">
          <button >Editar</button>
        </router-link>
        <button @click.prevent="deletelivro(livro.id)">Deletar</button>
        <hr />
      </li>
    </ul>
  </div>
</template>

<script>
import { useLoadlivros, deletelivro } from '@/firebase'

export default {

  data() {
    return {
      livros: '',
      filtro:'Todos',
      listaLivro: []
    }
  },
  mounted() {
    this.loadLivros()

  },
  methods: {
    loadLivros(){
      this.listaLivro = useLoadlivros()
      this.livros = useLoadlivros()
    },
    filtraLivro(){
       if (this.filtro) {
         this.livros = this.listaLivro.filter((livro) =>
           livro.genero.includes(this.filtro)
         );
       }
       if (this.filtro == 'Todos') {
         this.livros = this.listaLivro;
       }
      
    },
    deletelivro(id){
      
        if(confirm('Confirma Operação?')){
          
          deletelivro(id)
        }
        return ;
      
    }
  },
 
}
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
}
li {
  list-style: none;
}

img {
  width: 12%;
}
</style>



[ 
  { 
    "Aasdddddddddddddd": 
    { 
      "autor": "Apartamento", 
      "descricao": "12313213", 
      "genero": "Romance", 
      "nome": "Aasdddddddddddddd", 
      "url": "https://static3.tcdn.com.br/img/img_prod/460977/teste_100485_1_cbc226c7d23a19c784fb4752ffe61337.png"
    }, 
    "Dracula": 
      { 
        "autor": "Bram Stoker", 
        "descricao": "Um de vampiro", 
        "genero": "Terror", 
        "nome": "Dracula", 
        "url": "https://images-na.ssl-images-amazon.com/images/I/51ALy2uESuL._SY344_BO1,204,203,200_QL70_ML2_.jpg"
      }, 
] }
