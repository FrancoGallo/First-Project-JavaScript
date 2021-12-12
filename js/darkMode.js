// Variables declaradas (el boton que acciona, el body, el header y el aside)
const btnDarkMode = document.querySelector ("#btnDarkMode");
const bodyStyle = document.querySelector ("body");
const headerStyle = document.querySelector ("header");
const asideStyle = document.querySelector ("aside");

// Funciones de cambio
function darkMode() {
    // Acción en el local storage
    localStorage.setItem ("darkModeLocalStorage", "true");
    // Acción en el btn
    btnDarkMode.classList.replace ("btn-dark", "btn-light");
    btnDarkMode.innerHTML = "Light Mode";
    // Acción en el body
    bodyStyle.classList.add ("body-dark-style");
    // Acción sobre el header
    headerStyle.classList.add ("header-dark-style");
    // Acción sobre el aside
    asideStyle.classList.add ("aside-dark-style");
}

function lightMode() {
    // Acción en el local storage
    localStorage.setItem ("darkModeLocalStorage", "false");
    // Acción en el btn
    btnDarkMode.classList.replace ("btn-light", "btn-dark");
    btnDarkMode.innerHTML = "Dark Mode";
    // Acción en el body
    bodyStyle.classList.remove ("body-dark-style");
    // Acción sobre el header
    headerStyle.classList.remove ("header-dark-style");
    // Acción sobre el aside
    asideStyle.classList.remove ("aside-dark-style");
}

// If para identificar la condicion en el local storage
if (localStorage.getItem ("darkModeLocalStorage") == "true") {
    darkMode();
}

// El evento en cuestion del btn
$("#btnDarkMode").on ("click", () => {
    if (btnDarkMode.classList.contains ("btn-dark")) {
        darkMode();
    }
    else if (btnDarkMode.classList.contains ("btn-light")) {
        lightMode();
    }
});