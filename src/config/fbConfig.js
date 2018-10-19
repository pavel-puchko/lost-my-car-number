import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyDOrsptY_NfQdGFn-YiVHStPB5Q6tY9wDM",
  authDomain: "lost-my-number.firebaseapp.com",
  databaseURL: "https://lost-my-number.firebaseio.com",
  projectId: "lost-my-number",
  storageBucket: "lost-my-number.appspot.com",
  messagingSenderId: "212234731686"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 