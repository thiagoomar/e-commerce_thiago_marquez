let h1 = document.querySelector("h1"); // seleccionamos el elemento y lo guardamos en la variable h1
h1.innerText = "Encontra el Auto de tus Sueños"; // cambiamos el texto interno del h1 a "Encuentra el Auto de tus Sueños"

// asignamos los datos del JSON a la variable data

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


// usamos map para crear las cards dinámicamente
function cards() {
  let array = data.map(
    (car) => `
    <div class="col-md-4 col-sm-6 col-12 mb-4">
        <div class="card shadow-sm">
            <img src="${car.car_image}" class="card-img-top img-fluid" alt="${car.car_make} ${car.car_model}">
            <div class="card-body">
                <h4 class="card-title">${car.car_make} ${car.car_model}</h4>
                <p class="card-text">Precio: $${car.car_price}</p>
                <p class="card-text">Año: ${car.car_model_year}</p>
                <a href="../Producto/producto.html?prod=${car.id}" class="btn btn-dark">Ver más</a>
            </div>
        </div>
    </div>`
  );

  document.querySelector("#cards").innerHTML = array.join("");
}

cards();

function buscador() {
  let inputBuscador = document.querySelector("#input");

  let filterData = data.filter(
    (car) => car.car_make.toLowerCase() === inputBuscador.value.toLowerCase()
  );

  let cards = filterData.map(
    (car) => `
      <div class="col-md-4 col-sm-6 col-12 mb-4">
          <div class="card shadow-sm">
              <img src="${car.car_image}" class="card-img-top img-fluid" alt="${car.car_make} ${car.car_model}">
              <div class="card-body">
                  <h4 class="card-title">${car.car_make} ${car.car_model}</h4>
                  <p class="card-text">Precio: $${car.car_price}</p>
                  <p class="card-text">Año: ${car.car_model_year}</p>
                  <a href="../Producto/producto.html?prod=${car.id}" class="btn btn-dark">Ver más</a>
              </div>
          </div>
      </div>
  `
  );

  document.querySelector("#cards").innerHTML = cards.join("");
}

document.querySelector("#cards").innerHTML = "<div class='loader-container'><div class='loader'></div></div>";

const loadingPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(cards());
    }, 3000);
});

let botonBuscador = document.querySelector("#buscarBoton");
botonBuscador.addEventListener("click", buscador);

let limpiarBoton = document.querySelector("#limpiarBoton");
limpiarBoton.addEventListener("click", () => {
  document.querySelector("#input").value = "";
  cards();
});

function filtrar(categoria) {
  let filterData = data.filter(
    (car) => car.category.toLowerCase() === categoria.toLowerCase()
  );

  let cards = filterData.map(
    (car) => `
      <div class="col-md-4 col-sm-6 col-12 mb-4">
          <div class="card shadow-sm">
              <img src="${car.car_image}" class="card-img-top img-fluid" alt="${car.car_make} ${car.car_model}">
              <div class="card-body">
                  <h4 class="card-title">${car.car_make} ${car.car_model}</h4>
                  <p class="card-text">Precio: $${car.car_price}</p>
                  <p class="card-text">Año: ${car.car_model_year}</p>
                  <a href="../Producto/producto.html?prod=${car.id}" class="btn btn-dark">Ver más</a>
              </div>
          </div>
      </div>
  `
  );

  document.querySelector("#cards").innerHTML = cards.join("");
}

let todosBoton = document.querySelector("#todosBoton");
todosBoton.addEventListener("click", () => {
  document.querySelector("#input").value = "";
  cards();
});