let Home = {
    render : async () => {
        let view = /* html */ `
        <section class="content">
        <figure>
            <img id="image-muro" src="img-page/plan-muro.jpg" alt="image-muro">
        </figure>
        <section class="create">
        <h1 id="titulo-publicacion">Crear publicación</h1>
        <input id="tex-post" class="inputs" type="text" placeholder="¿Qué quieres compartir?">
        <button class="btn-generales" id="publicar">Publicar</button>
        <button class="btn-generales" id="editado">Guardar</button>
        </section>
        <ul id="tabla" class="tabla">
            <li id="tabla-post"></li>
        </ul>

        `
        return view
    },
    after_render : async () => {
        document.getElementById("publicar").addEventListener("click", addPost);
    }
}
export default Home;