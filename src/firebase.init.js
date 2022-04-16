// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCzOgluBtywr6YeqasMSlkaVsHwiTSLZfs",
    authDomain: "sourav-fitness-9eac5.firebaseapp.com",
    projectId: "sourav-fitness-9eac5",
    storageBucket: "sourav-fitness-9eac5.appspot.com",
    messagingSenderId: "734390908163",
    appId: "1:734390908163:web:9aeec68948c21e297f2536",
    measurementId: "G-FCEBSX0NWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export default auth;