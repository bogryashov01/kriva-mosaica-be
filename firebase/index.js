// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// const getAnalytics = require('firebase/analytics');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB516qi_hSRP4x1FLnLshdGZ2l1weqKF2Y',
  authDomain: 'krivamosaica.firebaseapp.com',
  projectId: 'krivamosaica',
  storageBucket: 'krivamosaica.appspot.com',
  messagingSenderId: '723046263087',
  appId: '1:723046263087:web:a48ce57c6b942d125e19da',
  measurementId: 'G-NZN7016JEP'
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebase);

export default firebase;
