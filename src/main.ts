import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwe-YVbMpxeauUXjqZ0ZhW3mo0P4R347c",
  authDomain: "portfolio-4cf9e.firebaseapp.com",
  projectId: "portfolio-4cf9e",
  storageBucket: "portfolio-4cf9e.appspot.com",
  messagingSenderId: "284079082496",
  appId: "1:284079082496:web:9c5cb80e00ae9b4a66dce5",
  measurementId: "G-7TVBDG7YB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
