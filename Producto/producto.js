// class Producto {
//     constructor(titulo, detalle, precio, stock, imagen) {
//         this.titulo = titulo
//         this.detalle = detalle
//         this.precio = precio
//         this.stock = stock
//         this.imagen = imagen
//     }
// }

let data = [
  {
    category: "moderno",
    id: 1,
    car_make: "Nissan",
    car_model: "Quest",
    car_model_year: 1998,
    car_vin: "3D4PH9FV6AT802669",
    car_price: 74933,
    car_stock: 9,
    car_image: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg",
    car_description: "Other specified rheumatic heart diseases",
  },
  {
    category: "vintage",
    id: 2,
    car_make: "Chevrolet",
    car_model: "Cavalier",
    car_model_year: 1995,
    car_vin: "WBASP4C52CC580600",
    car_price: 84263,
    car_stock: 1,
    car_image: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/2.jpg",
    car_description:
      "Colles' fracture of left radius, subsequent encounter for closed fracture with routine healing",
  },
  {
    category: "moderno",
    id: 3,
    car_make: "Aston Martin",
    car_model: "V12 Vantage",
    car_model_year: 2011,
    car_vin: "3GYFK22259G877567",
    car_price: 93350,
    car_stock: 8,
    car_image: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/3.jpg",
    car_description:
      "Posterior subluxation of proximal end of tibia, right knee, initial encounter",
  },
  {
    category: "vintage",
    id: 4,
    car_make: "Pontiac",
    car_model: "Grand Prix",
    car_model_year: 1972,
    car_vin: "1FT7W2A60EE929057",
    car_price: 67345,
    car_stock: 8,
    car_image: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/4.jpg",
    car_description:
      "Nondisplaced fracture of epiphysis (separation) (upper) of unspecified femur, initial encounter for closed fracture",
  },
  {
    category: "moderno",
    id: 5,
    car_make: "Lincoln",
    car_model: "Continental",
    car_model_year: 1999,
    car_vin: "WVGAV7AXXAW988246",
    car_price: 54266,
    car_stock: 1,
    car_image: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/5.jpg",
    car_description:
      "Other diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism complicating pregnancy, childbirth and the puerperium",
  },
  {
    category: "moderno",
    id: 6,
    car_make: "Lamborghini",
    car_model: "Diablo",
    car_model_year: 2000,
    car_vin: "1C4RJEAG7FC600759",
    car_price: 87974,
    car_stock: 1,
    car_image: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/6.jpg",
    car_description: "Adverse effect of oral contraceptives",
  },
  {
    category: "vintage",
    id: 7,
    car_make: "Rolls-Royce",
    car_model: "Ghost",
    car_model_year: 2012,
    car_vin: "WAUDFAFL7EN498244",
    car_price: 81255,
    car_stock: 3,
    car_image: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/7.jpg",
    car_description: "Torus fracture of upper end of right tibia",
  },
  {
    category: "moderno",
    id: 8,
    car_make: "Saturn",
    car_model: "Ion",
    car_model_year: 2004,
    car_vin: "5UXFG2C59DL110797",
    car_price: 88927,
    car_stock: 6,
    car_image: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/8.jpg",
    car_description:
      "Injury of unspecified muscle and tendon at ankle and foot level",
  },
  {
    category: "vintage",
    id: 9,
    car_make: "Ford",
    car_model: "F150",
    car_model_year: 2005,
    car_vin: "WAUXU54B02N134554",
    car_price: 56527,
    car_stock: 7,
    car_image: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/9.jpg",
    car_description:
      "Nondisplaced segmental fracture of shaft of radius, right arm, subsequent encounter for open fracture type I or II with malunion",
  },
  {
    category: "moderno",
    id: 10,
    car_make: "BMW",
    car_model: "5 Series",
    car_model_year: 1995,
    car_vin: "WAUNG74F39N807229",
    car_price: 77392,
    car_stock: 3,
    car_image: "../Media/auto10.jpg",
    car_description: "Sickle-cell trait",
  },
];

// const auto1 = new Producto("Ford F-150", "Un camión resistente y confiable", '$40,000', '5 disponibles', 'https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg');

// obtenemos el ID del producto desde la URL
let id = window.location.search.split("=")[1];
// buscamos el producto en el array de datos y lo renombramos como 'auto'
let auto = data.find((car) => car.id == id);
// seleccionamos el contenedor donde se mostrarán los detalles
let main = document.querySelector(".producto");

// si el producto se encuentra, lo mostramos en la página. si no, mostramo el "auto no encontrado"
if (auto) {
  let cantidad = 1;
  main.innerHTML = `
      <div class="col-md-4 col-sm-6 col-12 mb-4">
          <div class="card shadow-sm">
              <img src="${auto.car_image}" class="card-img-top" alt="Auto ${
    auto.car_make
  } ${auto.car_model}">
              <div class="card-body">
                  <h5 class="card-title"><strong>Auto:</strong> ${auto.car_make} ${
    auto.car_model
  }</h5>
                  <p class="card-text"><strong>Precio:</strong> $${
                    auto.car_price
                  }</p>
                  <p class="card-text"><strong>Año:</strong> ${
                    auto.car_model_year
                  }</p>
                  <p class="card-text"><strong>Stock:</strong> ${
                    auto.car_stock
                  }</p>
                  <p class="card-text"><strong>Descripción:</strong> ${
                    auto.car_description
                  }</p>
          </div>
      </div>
      <div class="compra mt-3">
        ${
          localStorage.getItem("usuarioEmail")
            ? `
            <div class="input-group mb-3">
                <button onclick="restarCantidad()" class="btn btn-outline-secondary" type="button">-</button>
                <input type="text" id="cantidad" class="form-control text-center" value="${cantidad}" aria-label="Cantidad" readonly>
                <button onclick="sumarCantidad()" class="btn btn-outline-secondary" type="button">+</button>
            </div>
            <button onclick="añadirItems(${auto.id})" class="btn btn-primary">Comprar</button>
            `
            : `<button onclick="loguearse()" class="btn btn-success">Iniciar Sesión para Comprar</button>`
        }
      </div>
  `;

  function sumarCantidad() {
    if (cantidad < auto.car_stock) {
      cantidad++;
      document.querySelector("#cantidad").value = cantidad;
    }
  }

  function restarCantidad() {
    if (cantidad > 1) {
      cantidad--;
      document.querySelector("#cantidad").value = cantidad;
    }
  }
} else {
  main.innerHTML = `<p class="notfound">Auto no encontrado</p>`;
}

function loguearse() {
  window.location.href = "../Login/login.html";
}

function añadirItems() {
  function add() {
    // se obtiene el carrito desde el localStorage y lo convierte de JSON a un array de objetos. se convierte el id a un numero
    let cart = JSON.parse(localStorage.getItem("cart"));
    const idProduct = Number(window.location.search.split("=")[1]);

    // se busca el producto correspondiente en el array `data` usando el ID obtenido.
    const product = data.find((auto) => auto.id === idProduct);

    // se verifica si el producto ya existe en el carrito, es decir, si el ID del producto está en el carrito.
    const existeElIdEnCart = cart.some((item) => item.product.id === idProduct);

    // si el producto ya está en el carrito, usa `map` para actualizar la cantidad de ese producto.
    if (existeElIdEnCart) {
      cart = cart.map((item) => {
        if (item.product.id === idProduct) {
          // se aumenta la cantidad actual del producto en el carrito con el valor de cantidad. si no, lo retorna sin cambios.
          return { ...item, quantity: item.quantity + Number(cantidad.value) };
        } else {
          return item;
        }
      });
    } else {
      // si el producto no está en el carrito, lo agrega como un nuevo objeto con su cantidad inicial.
      cart.push({ product: product, quantity: Number(cantidad.value) });
    }

    // se guarda el carrito actualizado en el localStorage en formato JSON. calculamos el total de productos en el carrito sumando las cantidades de c.uno
    localStorage.setItem("cart", JSON.stringify(cart));
    let quantity = cart.reduce(
      (acumulado, actual) => acumulado + actual.quantity,
      0
    );

    // se guarda la cantidad total en el localStorage y se actualiza el contador de la cantidad total en la interfaz.
    localStorage.setItem("quantity", quantity);
    const quantityTag = document.querySelector("#quantity");
    quantityTag.innerText = quantity;
  }

  Swal.fire({
    text: "Estás segura/o de que estás segura/o de que querés agregar el producto al carrito?",
    confirmButtonText: "Si",
    cancelButtonText: "No te vas a llevar mi plata",
    showCancelButton: true,
    showCloseButton: true,
    confirmButtonColor: "#06f",
    cancelButtonColor: "#DB5079",
  }).then((result) => {
    if (result.isConfirmed) {
      Toastify({
        text: "Agregaste producto/s al carrito",
        duration: 1500,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
      add();
    }
  });
}
