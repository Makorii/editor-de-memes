const apartadoTexto = document.getElementById("apartado-texto");
const apartadoImagen = document.getElementById("apartado-imagen");
const botonTexto = document.getElementById("boton-texto");
const botonImagen = document.getElementById("boton-imagen");

botonTexto.addEventListener("click", () => {
    apartadoTexto.style.display = "block";
})

botonImagen.addEventListener("click", () => {
    apartadoImagen.style.display = "block";
    apartadoTexto.style.display = "none";
})

const botonModoClaro = document.getElementById("modo-claro");
const botonModoOscuro = document.getElementById("modo-oscuro");
const header = document.getElementById("header");
const main = document.getElementById("main");
const inputs = document.getElementsByTagName("input");
// console.log(inputs); PREGUNTAR COMO PUEDO TRAER TODOS LOS ELEMENTOS DE UN ARRAY.
const contendorFondoImg = document.getElementById("contenedor-fondo-img");
const fondoOpciones = document.getElementById("fondo-opciones");
const botonRestaurar = document.getElementById("boton-restaurar");
const textoInferior = document.getElementById("texto-inferior");
const textoSuperior = document.getElementById("texto-superior");
const fuenteOpciones = document.getElementById("fuente-opciones");
const botonIzquierda = document.getElementById("boton-alineacion-izquierda");
const botonCentro = document.getElementById("boton-alineacion-centro");
const botonDerecha = document.getElementById("boton-alineacion-derecha");
const botonSinCortorno = document.getElementById("sin-contorno");
const botonContornoClaro = document.getElementById("contorno-claro");
const botonContornoOscuro = document.getElementById("contorno-oscuro");
const interlineado = document.getElementById("interlineado");


botonModoOscuro.addEventListener("click", () => {
    botonModoOscuro.style.display = "none";
    botonModoClaro.style.display = "inline-block";
    header.classList.add("header-claro");
    main.classList.add("main-claro");
    apartadoImagen.classList.add("apartado-claro");
    apartadoTexto.classList.add("apartado-claro");
    inputs[0].classList.add("input-claro");
    inputs[1].classList.add("input-claro");
    contendorFondoImg.classList.add("input-claro");
    inputs[2].classList.add("input-claro");
    inputs[3].classList.add("input-claro");
    inputs[4].classList.add("input-claro");
    inputs[5].classList.add("input-claro");
    inputs[6].classList.add("input-claro");
    inputs[7].classList.add("input-claro");
    inputs[8].classList.add("input-claro");
    inputs[9].classList.add("input-claro");
    inputs[10].classList.add("input-claro");
    inputs[11].classList.add("input-claro");
    inputs[12].classList.add("input-claro");
    inputs[13].classList.add("input-claro");
    inputs[14].classList.add("input-claro");
    inputs[15].classList.add("input-claro");
    inputs[16].classList.add("input-claro");
    inputs[17].classList.add("input-claro");
    botonImagen.classList.add("header-claro");
    botonTexto.classList.add("header-claro");
    botonModoClaro.classList.add("header-claro");
    fondoOpciones.classList.add("input-claro");
    botonRestaurar.classList.add("input-claro");
    textoSuperior.classList.add("input-claro");
    textoInferior.classList.add("input-claro"); 
    fuenteOpciones.classList.add("input-claro");
    botonIzquierda.classList.add("input-claro");
    botonCentro.classList.add("input-claro");
    botonDerecha.classList.add("input-claro");
    botonSinCortorno.classList.add("input-claro");
    botonContornoClaro.classList.add("input-claro");
    botonContornoOscuro.classList.add("input-claro");
    interlineado.classList.add("input-claro");
})

botonModoClaro.addEventListener("click", () => {
    botonModoClaro.style.display = "none";
    botonModoOscuro.style.display = "inline-block";
    header.classList.remove("header-claro");
    main.classList.remove("main-claro");
    apartadoImagen.classList.remove("apartado-claro");
    apartadoTexto.classList.remove("apartado-claro");
    inputs[0].classList.remove("input-claro");
    inputs[1].classList.remove("input-claro");
    contendorFondoImg.classList.remove("input-claro");
    inputs[2].classList.remove("input-claro");
    inputs[3].classList.remove("input-claro");
    inputs[4].classList.remove("input-claro");
    inputs[5].classList.remove("input-claro");
    inputs[6].classList.remove("input-claro");
    inputs[7].classList.remove("input-claro");
    inputs[8].classList.remove("input-claro");
    inputs[9].classList.remove("input-claro");
    inputs[10].classList.remove("input-claro");
    inputs[11].classList.remove("input-claro");
    inputs[12].classList.remove("input-claro");
    inputs[13].classList.remove("input-claro");
    inputs[14].classList.remove("input-claro");
    inputs[15].classList.remove("input-claro");
    inputs[16].classList.remove("input-claro");
    inputs[17].classList.remove("input-claro");
    botonImagen.classList.remove("header-claro");
    botonTexto.classList.remove("header-claro");
    fondoOpciones.classList.remove("input-claro");
    botonRestaurar.classList.remove("input-claro");
    textoSuperior.classList.remove("input-claro");
    textoInferior.classList.remove("input-claro"); 
    fuenteOpciones.classList.remove("input-claro");
    botonIzquierda.classList.remove("input-claro");
    botonCentro.classList.remove("input-claro");
    botonDerecha.classList.remove("input-claro");
    botonSinCortorno.classList.remove("input-claro");
    botonContornoClaro.classList.remove("input-claro");
    botonContornoOscuro.classList.remove("input-claro");
    interlineado.classList.remove("input-claro");
})



















//cambio de color del fondo de texto
// const textoArriba = document.getElementById('texto-arriba');

// const colorFondoTexto = document.getElementById('fondo-texto-arriba');

// let colorCambiado;

// const cambiarColorFondo = (color) => {
//     textoArriba.style.backgroundColor = color;
// }
// colorFondoTexto.addEventListener('click', () => cambiarColorFondo(colorCambiado)); 

// const obtenerColor = (e) => {
//     colorCambiado = e.target.value;
//     cambiarColorFondo(colorCambiado);
// }

// colorFondoTexto.addEventListener('input', obtenerColor);


// //cambio de color de texto
// let colorcito

// const colorTexto = document.getElementById('color-texto');

// const cambiarColorTexto = (color) => {
//     textoArriba.style.color = color;
// }

// colorTexto.addEventListener('click', () => cambiarColorTexto(colorcito)); 

// const obtenerColorTexto = (e) => {
//     colorcito = e.target.value;
//     cambiarColorTexto(colorcito);
// }

// colorTexto.addEventListener('input', obtenerColorTexto);




//label en cada filtro del aside imagen

// //.color-choice input[type="color"],
// input[type="color"]::-webkit-color-swatch-wrapper,
// input[type="color"]::-webkit-color-swatch {
//   width: 18px;
//   height: 18px;
//   min-width: 18px;
//   border-radius: 50%;
//   background-color: transparent;
// }    (color-choice es el nombre de mi clase)

{/* <input type="reset"></input> */}