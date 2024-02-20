import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAepOj57V9sQuu0Ort44Hydaygu3ksW71c",
  authDomain: "todoappmszalacha.firebaseapp.com",
  databaseURL:
    "https://todoappmszalacha-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todoappmszalacha",
  storageBucket: "todoappmszalacha.appspot.com",
  messagingSenderId: "227794542165",
  appId: "1:227794542165:web:3fe53610997139d4443edc",
  measurementId: "G-S8ZP9YWFSV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
