const urljsonProducts = "js/products.json";
$.getJSON (urljsonProducts, function (items, status) {
    if (status == "success") {
        /* Genera los productos */
        for (const product of items.products) {
            $("#items").append (`
                <section class="list-group list-group-horizontal">
                    <div class="list-group-item wholeItem">
                        <h4 class="itemTitle">${product.name}</h4>
                        <img class="itemImg" src=${product.img} width="250" height="250">
                        <p>${product.description}</p>
                        <b class="itemPrice">U$ ${product.price}</b>
                        <button class="btn btn-danger btnBuy buyAlert">Comprar</button>
                    </div>
                </section>
            `);
        }
    }

    $(".buyAlert").on ("click", () => { /*<---Alerta para cuando añadis al carrito*/
        Swal.fire ({
            icon:'success',
            title:'¡Genial!',
            text:'De cabeza al carrito ;)'
        })
    });

    // Boton y funcion para añadir objeto al carrito (el resto esta en carrito "carrito.js")
    const btnBuy = document.querySelectorAll (".btnBuy");
    btnBuy.forEach ((actionForEach) => {
        actionForEach.addEventListener ("click", selectItem);
    });
});