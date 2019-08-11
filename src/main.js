// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

const logIn = document.getElementById("log-in");
const inputEmail = document.getElementById("email-registry");
const inputPassword = document.getElementById("password-registry");
const welcome = document.getElementById("welcome");



let abrir = document.getElementById("abrir"),
    open = document.getElementById("open"),
    conteiner = document.getElementById("conteiner"),
    cerrar = document.getElementById("cerrar");
   
let getIn = () => {
    if(email.value  && password.value ){
    welcome.innerHTML = "Bienvenido";
    
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }
  console.log(getIn);
  
};

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
// Validar si un correo es true o false

// const validateEmail = (string) => {

// };

logIn.addEventListener("click", getIn);
