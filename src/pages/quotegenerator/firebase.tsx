
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDwROBthKUNCbihgtw6zO4FrDQlZA950Fo",
    authDomain: "it35-domo.firebaseapp.com",
    projectId: "it35-domo",
    storageBucket: "it35-domo.appspot.com",
    messagingSenderId: "1014272754261",
    appId: "1:1014272754261:web:8f720885ec4420639f0adc",
    measurementId: "G-R748D6GQ16"
  };
  



const firebaseApp = initializeApp(firebaseConfig);

// 
const db = getFirestore(firebaseApp);

export{db};