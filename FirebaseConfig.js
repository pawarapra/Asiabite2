import firebase from 'firebase/compat/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCVyuW4uRCVZzH7MvApVwde95Or4Aj4bsY",
    authDomain: "asiabite-56806.firebaseapp.com",
    projectId: "asiabite-56806",
    storageBucket: "asiabite-56806.appspot.com",
    messagingSenderId: "1068300752913",
    appId: "1:1068300752913:web:d75e788db02cbd5ebe39b0"
  };

if (firebase.apps.length === 0) {
firebase.initializeApp(firebaseConfig);
}

const db = getDatabase();

export { db }