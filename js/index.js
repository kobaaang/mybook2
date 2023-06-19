import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
   apiKey: "AIzaSyDPlV67OSEE3lhHxh2eY9W7lX9Bs_4wGF4",
   authDomain: "login-aff7f.firebaseapp.com",
   projectId: "login-aff7f",
   storageBucket: "login-aff7f.appspot.com",
   messagingSenderId: "559730992292",
   appId: "1:559730992292:web:13420894d2dc5615493231"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const auth = getAuth();

document.getElementById('signUpButton').addEventListener('click', function (e) {
   e.preventDefault()   //이벤트 막아주고 콘솔로그 찍어줭
   const signUpEmail = document.getElementById('signUpEmail').value;
   const signUpPassword = document.getElementById('signUpPassword').value;

   createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
      .then((userCredential) => {
         console.log(userCredential);
         alert('회원가입 성공');
         // Signed in
         const user = userCredential.user;
         // ...
      })
      .catch((error) => {
         alert('회원가입 실패');
         console.log('error');
         const errorCode = error.code;
         const errorMessage = error.message;
         // ..
      });
})

//로그인
document.getElementById('signInButton').addEventListener('click', function (e) {
   e.preventDefault()   //새로고침 방지
   const signInEmail = document.getElementById('signInEmail').value
   const signInPassword = document.getElementById('signInPassword').value
   signInWithEmailAndPassword(auth, signInEmail, signInPassword)
      .then((userCredential) => {
         alert('로그인 성공')
         console.log(userCredential)
         // Signed in
         const user = userCredential.user;
         // ...
         window.location.href = "./search1.html";
      })
      .catch((error) => {
         console.log('로그인 실패');
         alert('로그인 실패');
         const errorCode = error.code;
         const errorMessage = error.message;
      });
})


