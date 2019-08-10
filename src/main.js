// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

let abrir = document.getElementById("abrir"),
  open = document.getElementById("open"),
  conteiner = document.getElementById("conteiner"),
  cerrar = document.getElementById("cerrar");

abrir.addEventListener("click", () => {
  open.classList.add("active")
  conteiner.classList.add("active")
});
cerrar.addEventListener("click", () => {
  open.classList.remove("active")
  conteiner.classList.remove("active")


});



// window.addEventListener((event) =>{
//   if( event.target == open) {
//       open.visibility ="hidden";
//   }
// });
var firebaseConfig = {
  apiKey: "AIzaSyBmKXHHXPk-3WQ49qZhy4JZDMtcN_IrCt0",
  authDomain: "fitclubredsocial.firebaseapp.com",
  databaseURL: "https://fitclubredsocial.firebaseio.com",
  projectId: "fitclubredsocial",
  storageBucket: "",
  messagingSenderId: "151023209904",
  appId: "1:151023209904:web:bae938869cf0dc09"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


let emailNodo = document.getElementById("email-register");
let passwordNodo = document.getElementById("password-register");
let botonRegistrarNodo = document.getElementById("registrarse");

// evento para obtener los datos 
botonRegistrarNodo.addEventListener("click", () => {
  const emailText = emailNodo.value;
  const passText = passwordNodo.value;

  // SINGN up
  firebase.auth().createUserWithEmailAndPassword(emailText, passText).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ...
  });
});

// con google
const ingresoGoogle = () => {
  if (firebase.auth().currentUser) {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    firebase.auth().signInWithRedirect(provider).then(function (result) {
      var token = result.credential.accesstoken;
      var user = result.user;
    }).catch (function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var errorEmail = error.email;
      var credential = error.credential;
      if (errorCode === "auth/account-exists-with-different-credential"){
        alert("el usuario ya existe");
      }
    })

  } else {
    firebase.auth().signOut();
  }
};







// firebase.auth().signOut().then(function() {
//   // Sign-out successful.
// }).catch(function(error) {
//   // An error happened.
// });






