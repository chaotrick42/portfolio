import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import reportWebVitals from "./reportWebVitals";

const firebaseConfig = {
  apiKey: "AIzaSyCT2TcAfPTlK3HvrTHlgKOnY2CSsmEtxbQ",
  authDomain: "chaotrick42.firebaseapp.com",
  projectId: "chaotrick42",
  storageBucket: "chaotrick42.appspot.com",
  messagingSenderId: "445489767405",
  appId: "1:445489767405:web:e05b2d48a2f1039aff7de4",
  measurementId: "G-EKC70DE758"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





// Initialize Firebase
