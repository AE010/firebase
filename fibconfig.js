
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBotir2QNc6KGIRLlH4kO3qJbSqcqDbTDk",
  authDomain: "skibidi-e49af.firebaseapp.com",
  projectId: "skibidi-e49af",
  storageBucket: "skibidi-e49af.firebasestorage.app",
  messagingSenderId: "930924268597",
  appId: "1:930924268597:web:098bc5c38fbe6ce0ba357c",
  measurementId: "G-DWF7XTGS2R"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export { auth };
