import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config = {
   
    apiKey: "AIzaSyAyfs0WsJGC4fDG1yXwwY0Jz5VlKk4gC1A",
    authDomain: "crwn-db-c1492.firebaseapp.com",
    databaseURL: "https://crwn-db-c1492.firebaseio.com",
    projectId: "crwn-db-c1492",
    storageBucket: "crwn-db-c1492.appspot.com",
    messagingSenderId: "443220808815",
    appId: "1:443220808815:web:3482cc3d78a2f6f09e299a",
    measurementId: "G-FGX2TKW6FR"
  
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


