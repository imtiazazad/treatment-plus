// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkFSUubS_l87ty2dQUvUaD3VvLwBmlmJA",
  authDomain: "treatment-plus.firebaseapp.com",
  projectId: "treatment-plus",
  storageBucket: "treatment-plus.appspot.com",
  messagingSenderId: "735535317495",
  appId: "1:735535317495:web:55b0d5d749bbefbc1c6ef2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;