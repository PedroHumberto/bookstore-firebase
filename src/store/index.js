import { createStore } from 'vuex'
import { useLoadlivros, deletelivro } from '@/firebase'

export default createStore({
  state: {
    livros: []
  },
  getters: {
  },
  mutations: {
    BANCO_DE_DADOS(state){
      state.livros =  useLoadlivros()
    }
  },
  actions: {
    deletarLivro({state}, id){
      if(confirm('Confirma Operação?')){
       deletelivro(id)
       return state.livros = useLoadlivros()
     }
     return ;
    }
    
  },
  modules: {
  }
})
