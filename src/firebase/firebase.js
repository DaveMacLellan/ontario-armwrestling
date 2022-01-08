import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, getDoc, query, where, orderBy} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA1mVa-a3LPJ5k_H6RzGVhzRCclo4gq5vg",
    authDomain: "ontario-armwrestling.firebaseapp.com",
    databaseURL: "https://ontario-armwrestling-default-rtdb.firebaseio.com",
    projectId: "ontario-armwrestling",
    storageBucket: "ontario-armwrestling.appspot.com",
    messagingSenderId: "544644212841",
    appId: "1:544644212841:web:cc02b0de841b212e811af8",
    measurementId: "G-HJBXKG4FQQ"
};

//init firebase app
initializeApp(firebaseConfig);
//init services
const db = getFirestore();

export default db;