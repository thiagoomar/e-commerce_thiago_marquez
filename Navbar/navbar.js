const categorias = [
    { menu: "Inicio", href: "index.html" },
    { menu: "Sobre Nosotros", href: "sobre-nosotros.html" },
    { menu: "Servicios", href: "servicios.html" },
    { menu: "Contacto", href: "contacto.html" }
];

let menu = [];

for (let categoria of categorias) {
    menu.push(`
        <li class="nav-item">
            <a class="nav-link" href="${categoria.href}">${categoria.menu}</a>
        </li>
    `);
}

// Inserta el menú en el contenedor <ul>
document.querySelector("#generador").innerHTML = menu.join('').replaceAll(",", "");