import { createStore } from 'vuex'
import { useLoadlivros } from '@/firebase'

export default createStore({
  state: {
    livro: {
      nome: "",
      autor: "",
      url: "",
      genero: "",
      descricao: "",
    },
  },
  getters: {
  },
  mutations: {
    CARREGA_LIVRO(state, livros){
      console.log(livros)
      
    }
  },
  actions: {
  },
  modules: {
  }
})
