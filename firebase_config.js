
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBULwSrQPNsT-bQ_nEDloHtEqXbu9Uf1Xc",
  authDomain: "fir-ecommerse-e08c0.firebaseapp.com",
  projectId: "fir-ecommerse-e08c0",
  storageBucket: "fir-ecommerse-e08c0.firebasestorage.app",
  messagingSenderId: "1071124323693",
  appId: "1:1071124323693:web:47d1cba065cff354188e64",
  measurementId: "G-LQ2QC1VQSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth