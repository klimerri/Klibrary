import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCEtlnx_45-VEB5drLTtq3RT5HV-0Nuzqk",
  authDomain: "klibrary-bc498.firebaseapp.com",
  projectId: "klibrary-bc498",
  storageBucket: "klibrary-bc498.firebasestorage.app",
  messagingSenderId: "103066796756",
  appId: "1:103066796756:web:dcef40df558572d92f7141",
  databaseURL: "https://klibrary-bc498-default-rtdb.europe-west1.firebasedatabase.app/",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app); 