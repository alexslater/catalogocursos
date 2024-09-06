import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcx0t3pt7P5ZHjvpw7JDGwv1gY5yQgmXU",
  authDomain: "cursocoder-c8917.firebaseapp.com",
  projectId: "cursocoder-c8917",
  storageBucket: "cursocoder-c8917.appspot.com",
  messagingSenderId: "1072062304969",
  appId: "1:1072062304969:web:81105d8b5d9c09463bf318"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Crear la base de datos
export const db = getFirestore(app)
