const boton = document.querySelector("#btn-oscuro");

boton.addEventListener('click', () => {
    const cabecera = document.querySelector(".cabecera");
    const principal = document.querySelector(".principal");
    const tarjeta1 = document.querySelector("#tarjeta1");
    const tarjeta2 = document.querySelector("#tarjeta2");
    const tarjeta3 = document.querySelector("#tarjeta3");
    const tarjeta4 = document.querySelector("#tarjeta4");
    const lista = document.querySelector(".lista-usuarios");
    
    // BODY
    if (document.body.style.backgroundColor === 'rgb(15, 23, 42)') {
        document.body.style.backgroundColor = 'white';
    } else {
        document.body.style.backgroundColor = '#0F172A';
    }

    // CABECERA
    if (cabecera.style.backgroundColor === 'rgb(18, 52, 86)') {
        cabecera.style.backgroundColor = '#712a95';
    } else {
        cabecera.style.backgroundColor = '#123456';
    }

    //PRINCIPAL
    if (principal.style.backgroundColor === 'rgb(24, 23, 23)') {
        principal.style.backgroundColor = '#dcdcdc';
    } else {
        principal.style.backgroundColor = '#181717';
    }

    //tarjetas (1 a 4)
    if (tarjeta1.style.backgroundColor === 'rgb(117, 87, 87)') {
        tarjeta1.style.backgroundColor = '#ffffff';
    } else {
        tarjeta1.style.backgroundColor = '#755757';
    }
        if (tarjeta2.style.backgroundColor === 'rgb(117, 87, 87)') {
        tarjeta2.style.backgroundColor = '#ffffff';
    } else {
        tarjeta2.style.backgroundColor = '#755757';
    }
        if (tarjeta3.style.backgroundColor === 'rgb(117, 87, 87)') {
        tarjeta3.style.backgroundColor = '#ffffff';
    } else {
        tarjeta3.style.backgroundColor = '#755757';
    }
        if (tarjeta4.style.backgroundColor === 'rgb(117, 87, 87)') {
        tarjeta4.style.backgroundColor = '#ffffff';
    } else {
        tarjeta4.style.backgroundColor = '#755757';
    }
       if (lista.style.backgroundColor === 'rgb(145, 142, 142)') {
        lista.style.backgroundColor = '#ffffff';
    } else {
        lista.style.backgroundColor = 'rgb(145, 142, 142)';
    }
});
const boton2 = document.querySelector("#btn-titulo");
const titulo = document.querySelector("#titulo");

boton2.addEventListener("mouseover", () => {
    titulo.style.display = "block";
});
 
boton2.addEventListener("mouseout", () => {
    titulo.style.display = "none";
});
const btnLeerMas = document.querySelector("#btn-leer");
const textoExtra = document.querySelector("#texto-extra");
 
btnLeerMas.addEventListener("click", () => {
    if (textoExtra.style.display === "block") {
        textoExtra.style.display = "none";
        btnLeerMas.textContent = "Leer más";
    } else {
        textoExtra.style.display = "block";
        btnLeerMas.textContent = "Leer menos";
    }
});


