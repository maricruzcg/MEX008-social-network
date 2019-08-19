let Login = {
    render : async () => {
        let view = /* html */ `
        <!-- Seccion donde el usuario ingresa datos ya registrados para iniciar sesion -->
    <section class="registry">
      <section>

        <figure>
          <img src="img-page/fit-blanco.png" alt="logo" id="logo">
        </figure>
        <section class="inputs">
          <input type="text" placeholder="Correo electrónico" id="usuario" autocomplete="on">
          <input type="password" placeholder="Contraseña" id="contraseña">
          <button class="btn-generales" id="btn-iniciar">Iniciar Sesión</button>

        </section>
        <!-- seccion se le piden datos extras -->
        <section class="forget-password">
        <!-- <label>
            <input type="checkbox" name="remember" id="remember" checked>
            Recordarme
          </label> -->
          <a href="#" id="abrir">Registrate</a>
        </section>

        <p id="inicia1">O inicia con</p>
        <!-- Seccion inicia sesion con otra aplicacion -->
        <section class="aplications">
          <a href="#"><img src="img-page/facebook.png" alt="facebook" id="face"></a>
          <a href="#"><img src="img-page/gmail.png" alt="gmail" id="gmail"></a>
        </section>
      </section>

      <!-- modal -->
      <div id="open-modal" class="modal">

        <div class="conteiner" id="conteiner">

          <form id="modal-content" class="modal-content">
            <a href="#" id="cerrar" class="cerrar">X</a>
            <h2 id="crear-cuenta">Crear una cuenta</h2>
            <p id="inicia2">Registrate con</p>
            <section class="aplications">
              <a href="#"><img src="img-page/facebook.png" alt="facebook" id="face-register" width="50"></a>
              <a href="#"><img src="img-page/gmail.png" alt="gmail" id="gmail-register" width="50"></a>
            </section>

            <input class="inputs-register" type="text" placeholder="Nombre" autocomplete="on" required id="name-register">
            <input class="inputs-register" type="text" placeholder="Correo electrónico" name="email-register" autocomplete="on"
              id="email-register">
            <input class="inputs-register" type="password" placeholder="Contraseña mínimo 6 carácteres" id="password-register">
            <input class="inputs-register" type="password" placeholder="Confirmar contraseña" id="password-confirm">
            <label for="year" class="label"id="año-etiqueta">Año de nacimiento</label>
          <input class="inputs-register" type="number" max="2019" min="1940" placeholder="1940" id="year-register">
      
    
            </p>
            <p id="condiciones">Al hacer click en Registrarse, acepta los <a href="Términos y condiciones" class="terminos"> Términos y
                Condiciones</a> de
              uso
              de Fit Club</p>
            <div>
              <button class="registrarse" id="registrarse">
                Registrarse
              </button>
            </div>
        </div>
      </div>


    </section>

    </div>
    </div>
        `
        return view
    },
    after_render : async () => {
      //Modal

      const abrir = document.getElementById("abrir");
      const open = document.getElementById("open-modal");
      const conteiner = document.getElementById("conteiner");
      const cerrar = document.getElementById("cerrar");
      
      abrir.addEventListener("click", () => {
          open.classList.add("active");
          conteiner.classList.add("active");
      });
      cerrar.addEventListener("click", () => {
          open.classList.remove("active");
          conteiner.classList.remove("active");
      });

      

      //Registro
      const btnRegister = document.getElementById("registrarse");
      btnRegister.addEventListener("click", register, false);

      //Inicio de sesión
      const btnIniciarSesion = document.getElementById("btn-iniciar");
      btnIniciarSesion.addEventListener("click", logIn, false);


  
      //  Evento para abrir redireccionar registro google
      const btnGmail = document.getElementById("gmail-register");
      const btnEntrarGmail = document.getElementById("gmail")
      btnGmail.addEventListener("click", googleSignIn, false)
      btnEntrarGmail.addEventListener("click", googleSignIn, false);

  
      // Evento para abrir redireccionar registro facebook
      const btnfaceRegister = document.getElementById("face-register");
      const btnfaceInicio = document.getElementById("face");
      btnfaceRegister.addEventListener("click", ingresoConFacebook, false);
      btnfaceInicio.addEventListener("click", ingresoConFacebook, false);
      }
}
export default Login;