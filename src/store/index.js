import { createStore } from 'vuex'
import { useLoadlivros, livrosCollection } from '@/firebase'

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
    
    deletarLivro({commit}, id){
      if(confirm('Confirma Operação?')){
          commit('BANCO_DE_DADOS', {
            livros: useLoadlivros()
          })
          return livrosCollection.doc(id).delete()
     }
     return ;
    }
    
  },
  modules: {
  }
})
