// Firebase App (the core Firebase SDK) is always required and must be listed first
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add additional Firebase SDKs if needed
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEkvAxSUDWU3hu-KXsm-j6BeEPkjyDjqg",
  authDomain: "stocrx-3f1bf.firebaseapp.com",
  projectId: "stocrx-3f1bf",
  storageBucket: "stocrx-3f1bf.firebasestorage.app",
  messagingSenderId: "630960687276",
  appId: "1:630960687276:web:502b8a8b774972a12c7709",
  measurementId: "G-G8ZXHHBERN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export initialized app and analytics for use in your app
export { app, analytics };