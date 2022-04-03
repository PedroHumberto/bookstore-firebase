<template>
  <div class="container">
    <h3>Genero:</h3>
    <div class="opcoes">
      <select v-model="filtro" @change="filtraLivro()">
        <option selected value="Todos">Todos</option>
        <option value="Drama">Drama</option>
        <option value="Ficção">Ficção</option>
        <option value="Terror">Terror</option>
        <option value="Romance">Romance</option>
        <option value="Comedia">Comedia</option>
        <option value="Aventura">Aventura</option>
      </select>
    </div>
    <RouterLink to="/cadastro"
      ><button id="cadastro">Cadastro</button>
    </RouterLink>
    <ul>
      <li v-for="livro in livros" :key="livro.id">
        <div class="imagem">
          <img :src="livro.url" :alt="livro.descricao" :title="livro.nome" />
        </div>
        <h2>{{ livro.nome }}</h2>
        <p>Autor: {{ livro.autor }}</p>
        <p>Genero: {{ livro.genero }}</p>
        <p class="descricao">Descrição:</p> <p>{{ livro.descricao }}</p>
        <router-link :to="{ name: 'altera', params: { id: livro.id } }">
          <button class="editar">Editar</button>
        </router-link>
        <button @click.prevent="deletalivro(livro.id)" class="deletar">Deletar</button>
      </li>
    </ul>
  </div>
</template>
<script>
import { useLoadlivros } from "@/firebase";
export default {
  props:{ 
    listaLivro: {
      required: true,
    },
  },
  data() {
    return {
      filtro: 'Todos',
      livros: ''
    }
  },
  mounted() {
      this.livros = useLoadlivros()
      this.$store.commit('BANCO_DE_DADOS')
  },
  methods: {
    filtraLivro() {
      
      if (this.filtro) {
        this.livros = this.listaLivro.filter((livro) =>
          livro.genero.includes(this.filtro)
        );
      }
      if (this.filtro == "Todos") {
        this.livros = this.listaLivro;
      }
    },
    deletalivro(id) {
      this.$store.dispatch("deletarLivro", id);
      return this.livros = useLoadlivros();
      /*
        if(confirm('Confirma Operação?')){
           this.$store.dispatch('delete', id)
          deletelivro(id)
        }
        return ;
      */
    },
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  padding: 10px;
}
li {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin-bottom: 10px;
  width: 330px;
  margin: 10px 10px;
}
li:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
p{
  margin: 15px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.descricao{
  font-weight: bolder;
}
select {
  text-align: center;
  width: 200px;
}
img {
  margin-top: 15px;
  width: 100px;
}
#cadastro {
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

button {
  margin: 10px auto;
}
.editar{
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
.deletar{
  background-color: #af4c4c; /* Green */
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
</style>
