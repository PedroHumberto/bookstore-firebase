import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFabVFz17RAMrYelqgWY0w8RlXOGiYATw",
  authDomain: "my-books-1042e.firebaseapp.com",
  projectId: "my-books-1042e",
  storageBucket: "my-books-1042e.appspot.com",
  messagingSenderId: "374018835042",
  appId: "1:374018835042:web:ab212cfecf277e62ed073b"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const app = createApp(App).use(store)
getDatabase(initializeApp(firebaseConfig))

app.use(router)

app.mount('#app')
