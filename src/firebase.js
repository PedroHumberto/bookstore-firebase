import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
    apiKey: "AIzaSyBFabVFz17RAMrYelqgWY0w8RlXOGiYATw",
    authDomain: "my-books-1042e.firebaseapp.com",
    projectId: "my-books-1042e",
    storageBucket: "my-books-1042e.appspot.com",
    messagingSenderId: "374018835042",
    appId: "1:374018835042:web:ab212cfecf277e62ed073b"
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const livrosCollection = db.collection('livros')

export const createlivro = livro => {
  return livrosCollection.add(livro)
}

export const getlivro = async id => {
  const livro = await livrosCollection.doc(id).get()
  return livro.exists ? livro.data() : null
}

export const updatelivro = (id, livro) => {
  return livrosCollection.doc(id).update(livro)
}

export const deletelivro = id => {
  return livrosCollection.doc(id).delete()
}

export const useLoadlivros = () => {
  const livros = ref([])
  const close = livrosCollection.onSnapshot(snapshot => {
    livros.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return livros
}
