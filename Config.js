import  firebase from 'firebase'

export const firebaseConfig = {
    apiKey: "AIzaSyDJaGVi1XPI65uNTNx_ke3Tbq1UITYKogo",
    authDomain: "istoria-4ec45.firebaseapp.com",
    projectId: "istoria-4ec45",
    storageBucket: "istoria-4ec45.appspot.com",
    messagingSenderId: "651317978637",
    appId: "1:651317978637:web:a5e3a702d6bf46deb45744",
    measurementId: "G-BKF9ZDZXSN"
  };

var handleFirebase = null;



if (!firebase.apps.length) {
 handleFirebase = firebase.initializeApp(firebaseConfig);
}
else {
  handleFirebase = firebase.app(); // if already initialized, use that one

}

export default handleFirebase
// console.log(fireb)