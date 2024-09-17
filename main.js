let h1 = document.querySelector("h1"); // seleccionamos el elemento y lo guardamos en la variable h1
h1.innerText = 'Encontra el Auto de tus Sueños';  // cambiamos el texto interno del h1 a "Encuentra el Auto de tus Sueños"

let array = []; // hacemos una variable para el array

// generamos 9 cards con propiedades por defecto
function cards() {
for (let i = 1; i <= 9; i++) {  // hacemos un for (que va del 1 al 9)

    let modelo = `Auto Modelo ${i}`;
    let precio = '$30,000';
    let año = '2021';

    // cambiar las propiedades para las cards 1, 2 y 3
    if (i === 1) {
        modelo = 'Ford F-150';
        precio = '$40,000';
        año = '2022';
    } else if (i === 2) {
        modelo = 'Honda Civic';
        precio = '$20,000';
        año = '2020';
    } else if (i === 3) {
        modelo = 'Jeep Wrangler';
        precio = '$45,000';
        año = '2023';
    }

    // insertamos la card en el array
    array.push(`
        <div class="col-md-4 col-sm-6 col-12 mb-4">
            <div class="card shadow-sm">
                <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top img-fluid" alt="${modelo}">
                <div class="card-body">
                    <h4 class="card-title">${modelo}</h4>
                    <p class="card-text">Precio: ${precio}</p>
                    <p class="card-text">Año: ${año}</p>
                    <a href="#" class="btn btn-primary">Ver más</a>
                </div>
            </div>
        </div>
    `);  // realizamos el metodo .push para insentar dentro de este todo el contenido de las cards 
}
}

// seleccionamos el elemento section del documento y reemplaza su contenido con el HTML
// usamos replaceAll para eliminar las comas
// Insertamos las cards en el HTML
document.querySelector("section").innerHTML = array.join().replaceAll(",", "");
