
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC33u7amm10nwvUKr0_9ArcfwCetRco7KE",
  authDomain: "kahvedunyasi-d78da.firebaseapp.com",
  projectId: "kahvedunyasi-d78da",
  storageBucket: "kahvedunyasi-d78da.appspot.com",
  messagingSenderId: "862213526048",
  appId: "1:862213526048:web:b746a11789cdde8858e245"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export{
  db
}
