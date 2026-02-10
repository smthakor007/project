// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx0v2Rb5cTBuopeVQOT873d9vn6r1J_F4",
  authDomain: "sunil-87c3b.firebaseapp.com",
  databaseURL: "https://sunil-87c3b-default-rtdb.firebaseio.com",
  projectId: "sunil-87c3b",
  storageBucket: "sunil-87c3b.firebasestorage.app",
  messagingSenderId: "429616137227",
  appId: "1:429616137227:web:51d61281bc3d195a64f30e",
  measurementId: "G-GM3F2LQVPZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);