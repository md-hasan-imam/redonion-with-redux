import { getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuvh8jpoDcE-LKbGqUI8sxeBZ5oNe-z5w",
  authDomain: "red-onion-meal-website.firebaseapp.com",
  projectId: "red-onion-meal-website",
  storageBucket: "red-onion-meal-website.appspot.com",
  messagingSenderId: "218810127112",
  appId: "1:218810127112:web:b7d7f62452fa117a2012bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;