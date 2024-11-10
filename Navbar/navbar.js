const categorias = [
    { menu: "Inicio", href: "/PaginaPrincipal/index.html" },
    { menu: "Sobre Nosotros", href: "sobre-nosotros.html" },
    { menu: "Servicios", href: "servicios.html" },
    { menu: "Contacto", href: "contacto.html" },
];

let menu = [];

for (let categoria of categorias) {
    menu.push(`
        <li class="nav-item">
            <a class="nav-link" href="${categoria.href}">${categoria.menu}</a>
        </li>
    `);
}

const nav = `
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul id="generador" class="navbar-nav me-auto mb-2 mb-lg-0">
                    ${menu.join(
    ""
)} <!-- Aquí se insertan los elementos generados -->
                </ul>
                <div class="mx-auto">
                    <i class="bi bi-ev-front-fill" style="font-size: 3rem; color: rgb(255, 255, 255);"></i>
                </div>
                <ul class="navbar-nav-logueo session">${localStorage.getItem("usuarioEmail")
        ? `<li>Hola, ${localStorage.getItem("usuarioEmail")}</li>
                    <span>|</span>
                    <a href="../Cart/cart.html" style="text-decoration: none; color: inherit;"><li style="display: flex; align-items: center;"><img height="25" src="../Media/cart.png" alt="Comprar" /><b id="quantity" style="margin-left: 5px;">${localStorage.getItem(
            "quantity"
        )}</b></li></a>
                    <span>|</span>
                    <li onclick="logOut()">Cerrar Sesion</li> `
        : `<li><a class="nav-link" href="../Login/login.html">Iniciar Sesion</a></li> `
    }</ul>
                </div>
            </div>
        </div>
    </nav>
`;

function logOut() {
    localStorage.clear();
    location.href = "../PaginaPrincipal/index.html";
}

document.querySelector("header").innerHTML = nav;
