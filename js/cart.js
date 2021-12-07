// (La primer parte esta en "products.js") 

// Evento y funcion de alerta cuando finalizas compra
$(".finalBuyAlert").on ("click", () => {
    if (modalBody.innerHTML != "") {
        Swal.fire ({
            icon: 'success',
            title: '¡Gracias por su compra!'
        })
    }
    else if (modalBody.innerHTML == "") {
        Swal.fire({
            icon: 'error',
            title: 'No agregaste nada al carrito'
        })
    }
});

// Boton para finalizar compra
$("#btnFinishBuy").on ("click", removeCartContent);

// Cuerpo del carrito
const modalBody = document.querySelector (".modal-body");

// Funcion para "seleccionar" el producto
function selectItem (event) {
    const itemTarget = event.target;
    const wholeItem = itemTarget.closest (".wholeItem");

    // Titulo del producto
    const itemTitle = wholeItem.querySelector (".itemTitle").textContent;
    // Precio del producto
    const itemPrice = wholeItem.querySelector (".itemPrice").textContent;
    // Imagen del producto
    const itemImg = wholeItem.querySelector (".itemImg").src;

    createItemInCart (itemTitle, itemPrice, itemImg); 
}

// Funcion para crear el HTML en el carrito
function createItemInCart (itemTitle, itemPrice, itemImg) {
    // Para que no se duplique un producto en el carrito
    const itemTitleInCart = modalBody.getElementsByClassName ("itemTitleInCart");
    for (let i = 0; i < itemTitleInCart.length; i++) {
        if (itemTitleInCart[i].innerText == itemTitle) {
            let repeatedItem = itemTitleInCart[i].parentElement.parentElement.querySelector (".itemQuantity");
            repeatedItem.value++;
            totalCartPrice();
            return;
        }
    }

    // Crea elemento en carrito
    $(".modal-body").append (`
        <div class="alert alert-danger alert-dismissible fade show itemInCart justify-content-between" role="alert">
            <div>
                <img src=${itemImg} alt=${itemTitle}>
                 <h5 class="itemTitleInCart ms-2">${itemTitle}</h5>
                <p class="itemPriceInCart ms-3">${itemPrice}</p>
            </div>
            <div>
                <input class="quantity-style itemQuantity" type="number" value="1">
            </div>
            <button type="button" class="btn-close removePriceInTotal" aria-label="Close"></button>
        </div>
    `);

    $(".removePriceInTotal").on ("click", removePriceInTotal);

    $(".itemQuantity").on ("change", quantityOfItems);

    totalCartPrice();
}

// Funcion para el total del carrito
function totalCartPrice() {
    let total = 0;
    const cartTotal = document.querySelector ("#cartTotal");

    const itemInCart = document.querySelectorAll (".itemInCart");
    itemInCart.forEach (actionForEach2 => {
        const itemPriceInCart = Number (actionForEach2.querySelector (".itemPriceInCart").textContent.replace ("U$", ""));

        const itemQuantity = Number (actionForEach2.querySelector (".itemQuantity").value);

        total = total + itemPriceInCart * itemQuantity;
    });

    cartTotal.innerHTML = `Total: U$ ${total.toFixed(2)}`;
}

// Funcion para borrar el precio del producto del total en el carrito
function removePriceInTotal (event) {
    const btnRemove = event.target;
    btnRemove.closest (".itemInCart").remove();

    totalCartPrice();
}

// Funcion que cambia la cantidad de productos en el carrito
function quantityOfItems (event) {
    const btnQuantity = event.target;
    if (btnQuantity.value <= 0) {
        btnQuantity.value = 1;
    }

    totalCartPrice();
}

// Funcion para finalizar la compra del carrito
function removeCartContent() {
    modalBody.innerHTML = "";

    totalCartPrice();
}

// Evento para borrar todos los productos del carrito
$("#btnDeleteCart").on ("click", () => {
    removeCartContent();
});