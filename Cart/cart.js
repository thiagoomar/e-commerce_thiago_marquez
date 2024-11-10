const cardsSection = document.querySelector("#cards");

function getCart(cards) {
    if (cards.length === 0) {
        cardsSection.innerHTML = `<p class="text-center mt-4">El carrito está vacío</p>`;
        return;
    }
    const list = cards.map(
        (card) => `
    <div class="card border shadow-none">
        <div class="card-body">
            <div class="d-flex align-items-start border-bottom pb-3">
                <div class="me-4">
                    <img src="${card.product.car_image}" alt=""
                    class="avatar-lg rounded" />
                </div>
                <div class="flex-grow-1 overflow-hidden">
                    <h5 class="text-truncate font-size-18">${card.product.car_make
            } ${card.product.car_model}</h5>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="mt-3">
                                <p class="text-muted mb-2">Precio</p>
                                <h5 class="mb-0 mt-2">${card.product.car_price
            }</h5>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="mt-3">
                                <p class="text-muted mb-2">Cantidad</p>
                                <h5 class="mb-0 mt-2">${card.quantity}</h5>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mt-3">
                                <p class="text-muted mb-2">Total</p>
                                <h5>${card.product.car_price * card.quantity
            }</h5>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="mt-3">
                                <button class="btn btn-danger" onclick="removeItem(${card.product.id
            })">Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    );

    cardsSection.innerHTML = list.join("");
}

getCart(JSON.parse(localStorage.getItem("cart")));

function total(cards) {
    let cartTotal = document.querySelector("#card-total");

    let total =
        cards.length > 0
            ? cards.reduce(
                (acumulado, actual) =>
                    acumulado + actual.product.car_price * actual.quantity,
                0
            )
            : 0;
    cartTotal.innerHTML = "$" + total;
}

total(JSON.parse(localStorage.getItem("cart")));

function clearCart() {
    function clear() {
        let quantityTag = document.querySelector("#quantity");
        quantityTag.innerText = "0";
        localStorage.setItem("cart", JSON.stringify([]));
        getCart([]);
        total(0);
    }
    Swal.fire({
        text: "¿Estás segura/o de que querés vaciar el carrito?",
        icon: "warning",
        confirmButtonText: "Sí, borrar",
        cancelButtonText: "No, cancelar",
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonColor: "#06f",
        cancelButtonColor: "#DB5079",
    }).then((result) => {
        if (result.isConfirmed) {
            Toastify({
                text: "El carrito ha sido vaciado.",
                duration: 2000,
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
            }).showToast();
            clear();
        }
    });
}

function removeItem(id) {
    const cards = JSON.parse(localStorage.getItem("cart"));
    const newCards = cards.filter((card) => card.product.id != id);

    localStorage.setItem("cart", JSON.stringify(newCards));
    getCart(newCards);
    total(newCards);

    let quantity = newCards.reduce(
        (acumulado, actual) => acumulado + actual.quantity,
        0
    );
    localStorage.setItem("quantity", quantity);
    const quantityTag = document.querySelector("quantity");
    quantityTag.innerText = quantity;
}
