import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBhm0LqP-8zQznP8xLw2TuTpfv4Qw4nbGw",
  authDomain: "shadow-soprano.firebaseapp.com",
  projectId: "shadow-soprano",
  storageBucket: "shadow-soprano.firebasestorage.app",
  messagingSenderId: "97822264572",
  appId: "1:97822264572:web:b0bf3c960bbee27ec6db79",
  measurementId: "G-BBWJ2VM4H7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

window.googleLogin = async function () {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("Успешный вход:", user);
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "index.html";
  } catch (error) {
    console.error("Ошибка входа:", error.message);
  }
};

window.logout = async function () {
  await signOut(auth);
  localStorage.removeItem("user");
  window.location.reload();
};

window.onload = function () {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    console.log("Пользователь авторизован:", user);
    document.getElementById("user-info").innerHTML = `
      <img src="${user.photoURL}" alt="Аватар" style="width:50px; border-radius:50%;">
      <p>Привет, ${user.displayName}!</p>
      <button onclick="logout()">Выйти</button>
    `;
  }
};
