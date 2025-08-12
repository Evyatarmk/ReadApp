// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnDzbEamovq266Qf3tfp0h5KzdE0p8WYo",
  authDomain: "readapp-9562b.firebaseapp.com",
  projectId: "readapp-9562b",
  storageBucket: "readapp-9562b.firebasestorage.app",
  messagingSenderId: "213098159550",
  appId: "1:213098159550:web:59611bced1f34d955aadef",
  measurementId: "G-7SGTDZ683D"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
