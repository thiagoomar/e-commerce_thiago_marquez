let h1 = document.querySelector("h1"); // seleccionamos el elemento y lo guardamos en la variable h1
h1.innerText = 'Encontra el Auto de tus Sueños';  // cambiamos el texto interno del h1 a "Encuentra el Auto de tus Sueños"

// asignamos los datos del JSON a la variable data

let data = [{"id":1,"car_make":"Nissan","car_model":"Quest","car_model_year":1998,"car_vin":"3D4PH9FV6AT802669","car_price":74933,"car_stock":9,"car_image":"http://dummyimage.com/212x100.png/5fa2dd/ffffff","car_description":"Other specified rheumatic heart diseases"},
    {"id":2,"car_make":"Chevrolet","car_model":"Cavalier","car_model_year":1995,"car_vin":"WBASP4C52CC580600","car_price":84263,"car_stock":1,"car_image":"http://dummyimage.com/198x100.png/ff4444/ffffff","car_description":"Colles' fracture of left radius, subsequent encounter for closed fracture with routine healing"},
    {"id":3,"car_make":"Aston Martin","car_model":"V12 Vantage","car_model_year":2011,"car_vin":"3GYFK22259G877567","car_price":93350,"car_stock":8,"car_image":"http://dummyimage.com/105x100.png/dddddd/000000","car_description":"Posterior subluxation of proximal end of tibia, right knee, initial encounter"},
    {"id":4,"car_make":"Pontiac","car_model":"Grand Prix","car_model_year":1972,"car_vin":"1FT7W2A60EE929057","car_price":67345,"car_stock":8,"car_image":"http://dummyimage.com/208x100.png/ff4444/ffffff","car_description":"Nondisplaced fracture of epiphysis (separation) (upper) of unspecified femur, initial encounter for closed fracture"},
    {"id":5,"car_make":"Lincoln","car_model":"Continental","car_model_year":1999,"car_vin":"WVGAV7AXXAW988246","car_price":54266,"car_stock":1,"car_image":"http://dummyimage.com/119x100.png/ff4444/ffffff","car_description":"Other diseases of the blood and blood-forming organs and certain disorders involving the immune mechanism complicating pregnancy, childbirth and the puerperium"},
    {"id":6,"car_make":"Lamborghini","car_model":"Diablo","car_model_year":2000,"car_vin":"1C4RJEAG7FC600759","car_price":87974,"car_stock":1,"car_image":"http://dummyimage.com/115x100.png/ff4444/ffffff","car_description":"Adverse effect of oral contraceptives"},
    {"id":7,"car_make":"Rolls-Royce","car_model":"Ghost","car_model_year":2012,"car_vin":"WAUDFAFL7EN498244","car_price":81255,"car_stock":3,"car_image":"http://dummyimage.com/152x100.png/5fa2dd/ffffff","car_description":"Torus fracture of upper end of right tibia"},
    {"id":8,"car_make":"Saturn","car_model":"Ion","car_model_year":2004,"car_vin":"5UXFG2C59DL110797","car_price":88927,"car_stock":6,"car_image":"http://dummyimage.com/170x100.png/5fa2dd/ffffff","car_description":"Injury of unspecified muscle and tendon at ankle and foot level"},
    {"id":9,"car_make":"Ford","car_model":"F150","car_model_year":2005,"car_vin":"WAUXU54B02N134554","car_price":56527,"car_stock":7,"car_image":"http://dummyimage.com/217x100.png/dddddd/000000","car_description":"Nondisplaced segmental fracture of shaft of radius, right arm, subsequent encounter for open fracture type I or II with malunion"},
    {"id":10,"car_make":"BMW","car_model":"5 Series","car_model_year":1995,"car_vin":"WAUNG74F39N807229","car_price":77392,"car_stock":3,"car_image":"http://dummyimage.com/185x100.png/dddddd/000000","car_description":"Sickle-cell trait"},
    {"id":11,"car_make":"Acura","car_model":"CL","car_model_year":2002,"car_vin":"5UXFH0C58AL773324","car_price":81011,"car_stock":10,"car_image":"http://dummyimage.com/122x100.png/5fa2dd/ffffff","car_description":"Chronic multifocal osteomyelitis, left tibia and fibula"},
    {"id":12,"car_make":"BMW","car_model":"M3","car_model_year":2004,"car_vin":"2C4JDGAG2CR308990","car_price":50966,"car_stock":5,"car_image":"http://dummyimage.com/102x100.png/5fa2dd/ffffff","car_description":"Fall from skateboard, initial encounter"},
    {"id":13,"car_make":"Chevrolet","car_model":"Lumina","car_model_year":1997,"car_vin":"WBAAV53431F190969","car_price":59624,"car_stock":2,"car_image":"http://dummyimage.com/146x100.png/dddddd/000000","car_description":"Unspecified injury of ulnar artery at wrist and hand level of right arm, initial encounter"},
    {"id":14,"car_make":"Ford","car_model":"Explorer Sport Trac","car_model_year":2008,"car_vin":"3D73Y3HL0AG321089","car_price":73795,"car_stock":8,"car_image":"http://dummyimage.com/131x100.png/dddddd/000000","car_description":"Stress fracture, right ulna, subsequent encounter for fracture with delayed healing"},
    {"id":15,"car_make":"Maserati","car_model":"Quattroporte","car_model_year":2006,"car_vin":"1GD422CG3EF088140","car_price":60996,"car_stock":2,"car_image":"http://dummyimage.com/180x100.png/cc0000/ffffff","car_description":"Other contact with parrot, subsequent encounter"}]

// usamos map para crear las cards dinámicamente
function cards() {
let array = data.map((car) => `
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
    </div>`);

    document.querySelector("#cards").innerHTML = array.join("");
}

cards();