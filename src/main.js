// comenzando con firebase

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
  firebase.initializeApp(firebaseConfig)
  var db = firebase.firestore();

//Redireccionando al home
const goHome = () => {
    location.hash = '/home';
}

// Salir de sesión
const singOff = () => {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
})
.then(() => {
    alert("Regresa pronto");
    location.hash = '/';
})
.catch(function(error) {
    alert("Vuelve a intentarlo");
    // An error happened.
});

}
            

  //Observador de usuarios ya registrados
const observer = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("existe usuario activo")
      // User is signed in.
      let displayName = user.displayName;
      let email = user.email;
      let emailVerified = user.emailVerified;
      let photoURL = user.photoURL;
      let isAnonymous = user.isAnonymous;
      let uid = user.uid;
      let providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      console.log("no existe usuario activo")
      // ...
    }
  });  
}
observer();

//Inicio de sesion
const logIn = (e) => {
    // aqui se obtienen los valores
    e.preventDefault();
    const userIn = document.getElementById("usuario").value;
    const passIn = document.getElementById("contraseña").value;

    firebase.auth().signInWithEmailAndPassword(userIn, passIn)
    .then(() => goHome())
    .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // console.log(errorCode);
        // console.log(errorMessage);
        if(errorCode == "auth/invalid-email"){
          alert("Tu correo no es válido");
        }
        if(errorCode == "auth/email-already-in-use"){
          alert("Este correo electrónico ya esta registrado");
        }else{
          alert(errorMessage);
        }

    });
};

  //Registro
  // SINGN UP
  const register = (e) => {
    // aqui se obtienen los valores
    e.preventDefault();
    const userName = document.getElementById("name-register").value;
    const emailRegister = document.getElementById("email-register").value;
    const passRegister = document.getElementById("password-register").value;
    const passConfirm = document.getElementById("password-confirm").value;

    if(userName === " ") {
      alert("Por favor ingresa tu nombre");
      return;
    }
    if(emailRegister.lenght < 5) {
      alert("Correo electrónico no válido");
      return;
    }
    if(passRegister.lenght < 6){
      alert("Constraseña mínimo de 6 carácteres");
      return;
    }
    if(passConfirm !== passRegister) {
      alert("Tu contraseña no coincide");
      return;
    }
    
    firebase.auth().createUserWithEmailAndPassword(emailRegister, passRegister)
    .then(() => goHome())
    .catch(function (error) {
        // Handle Errors here.

        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode);
        // console.log(errorMessage);
        if(errorCode == "auth/invalid-email"){
          alert("Tu correo no es válido");
        }
        if(errorCode == "auth/email-already-in-use"){
          alert("Este correo electrónico ya esta registrado");
        }else{
          alert(errorMessage);
        }

    });
  };

   // Registro con google
   const googleSignIn = () => {
    if (!firebase.auth().currentUser) {
        let provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        firebase.auth().signInWithRedirect(provider)
        .then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            let token = result.credential.accessToken;
            // The signed-in user info.
            let user = result.user;

            // ...
        })
            .then(() => goHome())
            .catch(function (error) {
            // Handle Errors here.
            let errorCode = error.code;

            let errorMessage = error.message;
            console.log(errorMessage);
            // The email of the user's account used.
            let email = error.email;
            console.log(email);
            // The firebase.auth.AuthCredential type that was used.
            let credential = error.credential;
            console.log(credential);
            if (errorCode === "auth/account-exists-with-different-credential") {
                alert("es el mismo usuario")
            }
            // ...
        });

    } else {
        firebase.auth().signOut();

    }
  };

   //  registrando con facebook
   const ingresoConFacebook = () => {
    if (!firebase.auth().currentUser) {

        var provider = new firebase.auth.FacebookAuthProvider();
        provider.addScope("public_profile")
        firebase.auth().signInWithRedirect(provider).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(user);
            // ...
        })
            .then(() => goHome())
            .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            if (errorCode === "auth/account-exist-with-different-credential") {
                alert("es el mismo usuario")
            }
        });
    } else {
        firebase.auth().signOut();
    }
  };

  // añadir post
const addPost = (e) => {
  e.preventDefault();
  firebase.auth().onAuthStateChanged(function (user) {
      let nombre = user.email;        
      
      console.log(nombre)
      let post = document.getElementById("tex-post").value        
      
      // e.preventDefault();
      db.collection("post").add({
          name: nombre,
          posts: post,        
        })

          .then(function (docRef) {
              console.log("Document written with ID: ", docRef.id);
          })
          .catch(function (error) {
              console.error("Error adding document: ", error);
          });        
          
          document.getElementById("tex-post").value = "";
  });
};

// leer documentos
db.collection("post").orderBy("posts", "desc").onSnapshot((querySnapshot) => {
  let tabla = document.getElementById("tabla");    
  
  tabla.innerHTML = "";
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().name}`);
      tabla.innerHTML += `
     <h2 id="usuario-muro">${doc.data().name}<h2>
     <span id="post-muro">${doc.data().posts}</span>
    <button id="borrar"  onclick="deletePost('${doc.id}')">Borrar</button>
     <button class="editar"  onclick="editPost('${doc.id}', '${doc.data().posts}')">Editar</button>
     <input type="button" id="boton-contar" value="+1">
     <div id="contador">0</div>
     `    
  });

});

// borrar
const deletePost = id => {    
  
  let confirmDelete = confirm('Seguro que quieres eliminar este post?');
  if (confirmDelete == true) {
      
      db.collection('post')

      .doc(id)
      .delete()
      .then(function () {
          console.log('Document successfully deleted!');
      })
      .catch(function (error) {
          console.error('Error removing document: ', error);
      });
  }
};

//  editar

const editPost = (id,post) => {
  document.getElementById("tex-post").value = post;
  const editP = () => {
    let washingtonRef = db.collection('post').doc(id);
    let post = document.getElementById("tex-post").value;
         return washingtonRef
             .update({
                 posts: post,
             })
             .then(function() {
                 console.log('Document successfully updated!');
                 document.getElementById("tex-post").value = '';
             })
             .catch(function(error) {
                 // The document probably doesn't exist.
                 console.error('Error updating document: ', error);
             });
  }
  document.getElementById("editado").addEventListener("click", editP);
 };