import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAJxaBefVIemu6U6aJIyEcF2k_rsMDGbLI",
  authDomain: "fir-c33d3.firebaseapp.com",
  projectId: "fir-c33d3",
  storageBucket: "fir-c33d3.appspot.com",
  messagingSenderId: "150431179060",
  appId: "1:150431179060:web:110c2615b19a8046344561"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)