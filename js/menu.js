//Variables declaradas
let menuAside = document.querySelector("#menuAside");
let wholeBody = document.querySelector("#wholeBody");

//Evento y funcion de btn para abrir y cerrar menu
$("#btnOpenClosed").on ("click", () => {
    wholeBody.classList.toggle("bodyMove");
    menuAside.classList.toggle("menuAsideMove");
});

//Hace el menu responsive (adaptable)
$(window).on ("resize", () => {
    if (window.innerWidth > 760){
        wholeBody.classList.remove("bodyMove");
        menuAside.classList.remove("menuAsideMove");
    }

    else if (window.innerWidth < 760){
        wholeBody.classList.add("bodyMove");
        menuAside.classList.add("menuAsideMove");
    }
});