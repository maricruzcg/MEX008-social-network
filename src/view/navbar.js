let Navbar = {
    render : async () => {
        let view = /* html */ `
        <header>
        <figure>
            <a href="#/home"><img src="img-page/fit-blanco.png" alt="logo-wall" id="logo-wall"></a>    
        </figure>
        <nav>
            <ul>
                <li><a href="#/home">Inicio</a></li>
                <li><a href="#/perfil">Perfil</a></li>
                <li><a href="#/chat">Chat</a></li>
                <button class="btn-generales" id="close-sesion">Cierra Sesión</button>
                </ul>
                </nav>
    </header>
        `
        return view
    },
    after_render : async () => {
        const closed = document.getElementById("close-sesion");
        closed.addEventListener("click", singOff);              
    }
}
export default Navbar;