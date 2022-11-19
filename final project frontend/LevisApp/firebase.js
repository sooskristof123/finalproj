// Import the functions you need from the SDKs you need
//import firebase from 'firebase/compat/app';

import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCFFxoe8MtCn1-fq9NcWCvldNPw_6YIjGA",
    authDomain: "levisapp-b00bd.firebaseapp.com",
    projectId: "levisapp-b00bd",
    storageBucket: "levisapp-b00bd.appspot.com",
    messagingSenderId: "504455575664",
    appId: "1:504455575664:web:3af1af37557c501b615cb5"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export default firebase;
export {auth};