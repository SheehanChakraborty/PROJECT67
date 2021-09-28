import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {

};
// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAfCJKSLyx2A0L0-ulhTIJJMVl-yZgdFUE",
    authDomain: "project67-83c1a.firebaseapp.com",
    projectId: "project67-83c1a",
    storageBucket: "project67-83c1a.appspot.com",
    messagingSenderId: "454758958017",
    appId: "1:454758958017:web:22e566c95235c0df17a540",
    measurementId: "G-J1Z5H47M61"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.database();