import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAruUz7A2CDlOTENYkQI7V9SUXyXEgEmig",
  authDomain: "roomchat-app-2c67e.firebaseapp.com",
  databaseURL: "https://roomchat-app-2c67e.firebaseio.com",
  projectId: "roomchat-app-2c67e",
  storageBucket: "roomchat-app-2c67e.appspot.com",
  messagingSenderId: "289206853445",
  appId: "1:289206853445:web:9aea40976ad113b285682c",
  measurementId: "G-QVGNTRM01Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
