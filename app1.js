
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";


  const firebaseConfig = {
    apiKey: "AIzaSyBlxlOUdXlngXpsJbAR5LFXCAhzh-BApFA",
    authDomain: "faizanalam97-2a6ec.firebaseapp.com",
    projectId: "faizanalam97-2a6ec",
    storageBucket: "faizanalam97-2a6ec.appspot.com",
    messagingSenderId: "241029177691",
    appId: "1:241029177691:web:8f4718142e26a80e3afa7e",
    measurementId: "G-KNS6GL0FK2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  var signin = document.getElementById('signin')

  signin.addEventListener('click', function(){

    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    localStorage.setItem('email', email);
    var successlogin = true;
    // ...
    alert('Sign in Successful')
    location.href = './quiz.html'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert('Error: Please Sign up')
    location.href = './index.html'

  });


  })

  if(successlogin = true){

  function toImp(){
    var toImport = email;
      return toImport;
  }
  };

