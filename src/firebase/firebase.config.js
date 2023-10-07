import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD9KYvR85ZKfbOAYkpybNv2D5vpY6f0jb0",
  authDomain: "techtalk-seminar-2023.firebaseapp.com",
  projectId: "techtalk-seminar-2023",
  storageBucket: "techtalk-seminar-2023.appspot.com",
  messagingSenderId: "307715856666",
  appId: "1:307715856666:web:7c894d8f2ec681760db4a3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
