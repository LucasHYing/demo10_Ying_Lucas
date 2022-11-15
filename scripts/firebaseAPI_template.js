//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyCDLSfKW1F3K9s4ygnG6u5AQvc_X1gOeiY",
    authDomain: "comp1800-202230-8384c.firebaseapp.com",
    projectId: "comp1800-202230-8384c",
    storageBucket: "comp1800-202230-8384c.appspot.com",
    messagingSenderId: "814140187664",
    appId: "1:814140187664:web:1f5de3c6d19648b0a75695"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();