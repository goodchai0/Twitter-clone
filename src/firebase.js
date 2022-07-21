// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyB31r0500Tum5GXJ7diYM0W6FJj0UhcDHo",
    authDomain: "twitter-clone-d5d00.firebaseapp.com",
    projectId: "twitter-clone-d5d00",
    storageBucket: "twitter-clone-d5d00.appspot.com",
    messagingSenderId: "304471523138",
    appId: "1:304471523138:web:766318e239f835ce6192db",
    measurementId: "G-W3CJPGLT31"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();

  export default db;