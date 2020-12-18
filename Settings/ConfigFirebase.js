import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyCgsaBQVfELGoqjlbINr8tU4-UL7IBCGUQ",
    authDomain: "licores-db-ef7d1.firebaseapp.com",
    databaseURL: "https://licores-db-ef7d1-default-rtdb.firebaseio.com",
    projectId: "licores-db-ef7d1",
    storageBucket: "licores-db-ef7d1.appspot.com",
    messagingSenderId: "140361398571",
    appId: "1:140361398571:web:cace1449c82ed365ccad6e"
  };

  const fb = !firebase.apps.length ? firebase.initializeApp(config):firebase.app()

  export default fb;