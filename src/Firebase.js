// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHUmXgtooMlOJB26-cuyyxlhYZfGutnTc",
  authDomain: "fileupload-15e87.firebaseapp.com",
  projectId: "fileupload-15e87",
  storageBucket: "fileupload-15e87.appspot.com",
  messagingSenderId: "73443913660",
  appId: "1:73443913660:web:8ad2f80146b77d67ff05b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
