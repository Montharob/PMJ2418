import { createApp } from "vue";
import { createPinia } from "pinia";
// firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


import App from "./App.vue";
import router from "./router";

const firebaseConfig = {
  apiKey: "AIzaSyAhkJR64M4BZw3mipj74zi3hDyeCxJgbpM",
  authDomain: "pppm2418.firebaseapp.com",
  projectId: "pppm2418",
  storageBucket: "pppm2418.appspot.com",
  messagingSenderId: "11160174209",
  appId: "1:11160174209:web:2d8ee0f1ae67c3f09f9780"
};

const initfirestore = initializeApp(firebaseConfig);
export const db = getFirestore(initfirestore);
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");