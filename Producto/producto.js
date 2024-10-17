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
    car_image: "http://dummyimage.com/212x100.png/5fa2dd/ffffff",
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
    car_image: "http://dummyimage.com/198x100.png/ff4444/ffffff",
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
    car_image: "http://dummyimage.com/105x100.png/dddddd/000000",
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
    car_image: "http://dummyimage.com/208x100.png/ff4444/ffffff",
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
    car_image: "http://dummyimage.com/119x100.png/ff4444/ffffff",
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
    car_image: "http://dummyimage.com/115x100.png/ff4444/ffffff",
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
    car_image: "http://dummyimage.com/152x100.png/5fa2dd/ffffff",
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
    car_image: "http://dummyimage.com/170x100.png/5fa2dd/ffffff",
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
    car_image: "http://dummyimage.com/217x100.png/dddddd/000000",
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
    car_image: "http://dummyimage.com/185x100.png/dddddd/000000",
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
  main.innerHTML = `
        <div class="col-md-4 col-sm-6 col-12 mb-4">
            <div class="card shadow-sm">
                <img src="${auto.car_image}" class="card-img-top" alt="Auto ${auto.car_make} ${auto.car_model}">
                <div class="card-body">
                    <h5 class="card-title">Auto: ${auto.car_make} ${auto.car_model}</h5>
                    <p class="card-text">Precio del auto: $${auto.car_price}</p>
                    <p class="card-text">Año: ${auto.car_model_year}</p>
                    <p class="card-text">Stock: ${auto.car_stock}</p>
                    <p class="card-text">Descripcion: ${auto.car_description}</p>
                </div>
            </div>
        </div>
    `;
} else {
  main.innerHTML = "<p>Auto no encontrado</p>";
}
