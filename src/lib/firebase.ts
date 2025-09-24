// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  "projectId": "studio-2345727042-6742b",
  "appId": "1:859122415467:web:be9ad79d728d2a32c67e2e",
  "apiKey": "AIzaSyB-5erAlenkmlbfIE6hPW-lipI05k8TcDM",
  "authDomain": "studio-2345727042-6742b.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "859122415467"
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const db = getFirestore(app);

export { db };
