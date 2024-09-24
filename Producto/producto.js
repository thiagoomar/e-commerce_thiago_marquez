class Producto {
    constructor(titulo, detalle, precio, stock, imagen) {
        this.titulo = titulo
        this.detalle = detalle
        this.precio = precio
        this.stock = stock
        this.imagen = imagen
    }
}

const auto1 = new Producto("Ford F-150", "Un camión resistente y confiable", '$40,000', '5 disponibles', 'https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg');

let contenidoCard = `
    <div class="col-md-4 col-sm-6 col-12 mb-4">
        <div class="card shadow-sm">
            <img src="${auto1.imagen}" class="card-img-top" alt="${auto1.titulo}">
            <div class="card-body">
                <h5 class="card-title">${auto1.titulo}</h5>
                <p class="card-text">${auto1.detalle}</p>
                <p class="card-text">Precio: ${auto1.precio}</p>
                <p class="card-text">Stock: ${auto1.stock}</p>
            </div>
        </div>
    </div>
`;

let main = document.querySelector(".producto");

main.innerHTML = contenidoCard;