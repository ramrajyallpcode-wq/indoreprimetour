import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiO1cDDmtrmIiL1xfINWhER35DSlbUwYQ",
  authDomain: "testcar-c177c.firebaseapp.com",
  projectId: "testcar-c177c",
  storageBucket: "testcar-c177c.firebasestorage.app",
  messagingSenderId: "1077366148904",
  appId: "1:1077366148904:web:aabc92b9ecda6d36de4a1d"
};

const app = initializeApp(firebaseConfig);
let analytics = null;
if (typeof window !== 'undefined') {
  import('firebase/analytics').then(({ getAnalytics }) => {
    analytics = getAnalytics(app);
  });
}
const db = getFirestore(app);

export { db };