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

// autenticar con correo y contraseña 

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
const googleSignIn = () => {
  if(!firebase.auth().currentUser) {
 let provider = new firebase.auth.GoogleAuthProvider();
 provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
 firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  console.log("user")
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;

  var errorMessage = error.message;
  console.log(errorMessage);
  // The email of the user's account used.
  var email = error.email;
  console.log(email);
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  console.log(credential);
  if(errorCode==="auth/account-exists-with-different-credential") {
    alert("este usuario ya existe")
  } 
    
  
  // ...
});

}
};
const btnGmail = document.getElementById("gmail-register")
btnGmail.addEventListener("click",  googleSignIn, false)

  
// if (firebase.auth().currentUser) {
// firebase.auth().signOut().then(function() {
//   // Sign-out successful.
// }).catch(function(error) {
//   // An error happened.
// });






