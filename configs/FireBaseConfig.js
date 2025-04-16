// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "quickvid-9e943.firebaseapp.com",
  projectId: "quickvid-9e943",
  storageBucket: "quickvid-9e943.firebasestorage.app",
  messagingSenderId: "690036363676",
  appId: "1:690036363676:web:04e7c4e64f4642bffdb859",
  measurementId: "G-929PFN717L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);