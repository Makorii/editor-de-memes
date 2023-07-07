// ######## OCUTAR/MOSTRAR APARTADOS IMAGEN Y TEXTO ########
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

// ####### BOTON CERRAR APARTADOS IMAGEN Y TEXTO ########
const botonCerrarImagen = document.getElementById("boton-apartado-imagen");
const botonCerrarTexto = document.getElementById("boton-apartado-texto");
const body = document.getElementById("body");

botonCerrarImagen.addEventListener("click", () => {
    apartadoImagen.style.display = "none";
});

botonCerrarTexto.addEventListener("click", () => {
    apartadoTexto.style.display = "none";
});

// ############# MODO OSCURO/ MODO CLARO #############

const botonModoClaro = document.getElementById("modo-claro");
const botonModoOscuro = document.getElementById("modo-oscuro");
const header = document.getElementById("header");
const main = document.getElementById("main");
const inputs = document.getElementsByTagName("input");
const contendorFondoImg = document.getElementById("contenedor-fondo-img");
const fondoOpciones = document.getElementById("fondo-opciones");
const botonRestaurar = document.getElementById("boton-restaurar");
const textoInferior = document.getElementById("texto-inferior");
const textoSuperior = document.getElementById("texto-superior");
const fuenteOpciones = document.getElementById("fuente-opciones");
const botonIzquierda = document.getElementById("boton-alineacion-izquierda");
const botonCentro = document.getElementById("boton-alineacion-centro");
const botonDerecha = document.getElementById("boton-alineacion-derecha");
const iconoIzq = document.getElementById("icono-izquierda");
const iconoCentro = document.getElementById("icono-centro");
const iconoDer = document.getElementById("icono-derecha");
const textoFondo = document.getElementById("contenedor-texto-fondo");
const textoColor = document.getElementById("contenedor-texto-color");
const botonSinCortorno = document.getElementById("sin-contorno");
const botonContornoClaro = document.getElementById("contorno-claro");
const botonContornoOscuro = document.getElementById("contorno-oscuro");
const espaciado = document.getElementById("espaciado");
const interlineado = document.getElementById("interlineado");
const tituloHeader = document.getElementById("titulo-header");


botonModoOscuro.addEventListener("click", () => {
    botonModoOscuro.style.display = "none";
    botonModoClaro.style.display = "inline-block";
    header.classList.add("header-claro");
    tituloHeader.classList.add("texto-claro");
    main.classList.add("main-claro");
    apartadoImagen.classList.add("apartado-claro");
    apartadoImagen.classList.add("texto-claro");
    apartadoTexto.classList.add("apartado-claro");
    apartadoTexto.classList.add("texto-claro");
    botonCerrarImagen.classList.add("apartado-claro");
    botonCerrarTexto.classList.add("apartado-claro");
    inputs[0].classList.add("input-claro", "texto-claro");
    inputs[1].classList.add("input-claro");
    contendorFondoImg.classList.add("input-claro");
    inputs[2].classList.add("input-claro", "range-claro");
    inputs[3].classList.add("input-claro", "range-claro");
    inputs[4].classList.add("input-claro", "range-claro");
    inputs[5].classList.add("input-claro", "range-claro");
    inputs[6].classList.add("input-claro", "range-claro");
    inputs[7].classList.add("input-claro", "range-claro");
    inputs[8].classList.add("input-claro", "range-claro");
    inputs[9].classList.add("input-claro", "range-claro");
    inputs[10].classList.add("input-claro", "range-claro");
    inputs[11].classList.add("input-claro", "range-claro");
    inputs[12].classList.add("input-claro");
    inputs[13].classList.add("input-claro");
    inputs[14].classList.add("input-claro");
    inputs[15].classList.add("input-claro");
    inputs[16].classList.add("input-claro");
    inputs[17].classList.add("input-claro");
    botonImagen.classList.add("header-claro");
    botonImagen.classList.add("texto-claro");
    botonTexto.classList.add("header-claro");
    botonTexto.classList.add("texto-claro");
    botonModoClaro.classList.add("header-claro");
    botonModoClaro.classList.add("texto-claro");
    fondoOpciones.classList.add("input-claro", "texto-claro");
    botonRestaurar.classList.add("input-claro", "texto-claro");
    textoSuperior.classList.add("input-claro", "texto-claro");
    textoInferior.classList.add("input-claro", "texto-claro"); 
    fuenteOpciones.classList.add("input-claro", "texto-claro");
    tamanioFuente.classList.add("texto-claro");
    botonIzquierda.classList.add("input-claro");
    botonCentro.classList.add("input-claro");
    botonDerecha.classList.add("input-claro");
    iconoIzq.classList.add("texto-claro");
    iconoCentro.classList.add("texto-claro");
    iconoDer.classList.add("texto-claro");
    textoFondo.classList.add("input-claro");
    textoColor.classList.add("input-claro");
    botonSinCortorno.classList.add("input-claro", "texto-claro");
    botonContornoClaro.classList.add("input-claro", "texto-claro");
    botonContornoOscuro.classList.add("input-claro", "texto-claro");
    espaciado.classList.add("texto-claro");
    interlineado.classList.add("input-claro", "texto-claro");
})

botonModoClaro.addEventListener("click", () => {
    botonModoClaro.style.display = "none";
    botonModoOscuro.style.display = "inline-block";
    header.classList.remove("header-claro");
    tituloHeader.classList.remove("texto-claro");
    main.classList.remove("main-claro");
    apartadoImagen.classList.remove("apartado-claro");
    apartadoImagen.classList.remove("texto-claro");
    apartadoTexto.classList.remove("apartado-claro");
    apartadoTexto.classList.remove("texto-claro");
    botonCerrarImagen.classList.remove("apartado-claro");
    botonCerrarTexto.classList.remove("apartado-claro");
    inputs[0].classList.remove("input-claro");
    inputs[1].classList.remove("input-claro");
    contendorFondoImg.classList.remove("input-claro");
    inputs[2].classList.remove("input-claro", "range-claro");
    inputs[3].classList.remove("input-claro", "range-claro");
    inputs[4].classList.remove("input-claro", "range-claro");
    inputs[5].classList.remove("input-claro", "range-claro");
    inputs[6].classList.remove("input-claro", "range-claro");
    inputs[7].classList.remove("input-claro", "range-claro");
    inputs[8].classList.remove("input-claro", "range-claro");
    inputs[9].classList.remove("input-claro", "range-claro");
    inputs[10].classList.remove("input-claro", "range-claro");
    inputs[11].classList.remove("input-claro", "range-claro");
    inputs[12].classList.remove("input-claro");
    inputs[13].classList.remove("input-claro");
    inputs[14].classList.remove("input-claro");
    inputs[15].classList.remove("input-claro");
    inputs[16].classList.remove("input-claro");
    inputs[17].classList.remove("input-claro");
    botonImagen.classList.remove("header-claro");
    botonImagen.classList.remove("texto-claro");
    botonTexto.classList.remove("header-claro");
    botonTexto.classList.remove("texto-claro");
    fondoOpciones.classList.remove("input-claro", "texto-claro");
    botonRestaurar.classList.remove("input-claro", "texto-claro");
    textoSuperior.classList.remove("input-claro", "texto-claro");
    textoInferior.classList.remove("input-claro", "texto-claro"); 
    fuenteOpciones.classList.remove("input-claro" , "texto-claro");
    tamanioFuente.classList.remove("texto-claro");
    botonIzquierda.classList.remove("input-claro");
    botonCentro.classList.remove("input-claro");
    botonDerecha.classList.remove("input-claro");
    iconoIzq.classList.remove("texto-claro");
    iconoCentro.classList.remove("texto-claro");
    iconoDer.classList.remove("texto-claro");
    textoFondo.classList.remove("input-claro");
    textoColor.classList.remove("input-claro");
    botonSinCortorno.classList.remove("input-claro", "texto-claro");
    botonContornoClaro.classList.remove("input-claro", "texto-claro");
    botonContornoOscuro.classList.remove("input-claro", "texto-claro");
    espaciado.classList.remove("texto-claro");
    interlineado.classList.remove("input-claro", "texto-claro");
})

// ############# FONDO IMAGEN MEME #############
const urlImagen = document.getElementById("url-imagen");
const imagenMeme = document.getElementById("contenedor-imagen-meme");

urlImagen.addEventListener("input", () => {
    imagenMeme.style.backgroundImage = `url("${urlImagen.value}")`;
})

// #################### COLOR DE FONDO IMAGEN MEME #################
const colorFondoMeme = document.getElementById("color-fondo-meme");
const nombreHexadecimal = document.getElementById("hexadecimal");

colorFondoMeme.addEventListener("input", () => {
    imagenMeme.style.backgroundColor = `${colorFondoMeme.value}`;
    nombreHexadecimal.innerHTML = `${colorFondoMeme.value}`.toUpperCase();
})

fondoOpciones.addEventListener("change", () => {
    imagenMeme.style.backgroundBlendMode = `${fondoOpciones.value}`;
})

// ################# FILTROS MEME #####################

const brillo = document.querySelector("#brillo");

brillo.addEventListener("change", () => {
    imagenMeme.style.filter = `brightness(${brillo.value})`;
})

const opacidad = document.querySelector("#opacidad");

opacidad.addEventListener("change", () => {
    imagenMeme.style.filter = `opacity(${opacidad.value})`;
});

const contraste = document.querySelector("#contraste");

contraste.addEventListener("change", () => {
    imagenMeme.style.filter = `contrast(${contraste.value}%)`;
});

const desenfoque = document.querySelector("#desenfoque");

desenfoque.addEventListener("change", () => {
    imagenMeme.style.filter = `blur(${desenfoque.value}px)`;
});

const escalaDeGrises = document.querySelector("#escala-grises");

escalaDeGrises.addEventListener("change", () => {
    imagenMeme.style.filter = `grayscale(${escalaDeGrises.value}%)`;
});

const sepia = document.querySelector("#sepia");

sepia.addEventListener("change", () => {
    imagenMeme.style.filter = `sepia(${sepia.value}%)`;
});

const hue = document.querySelector("#hue");

hue.addEventListener("change", () => {
    imagenMeme.style.filter = `hue-rotate(${hue.value}deg)`;
});

const saturacion = document.querySelector("#saturacion");

saturacion.addEventListener("change", () => {
    imagenMeme.style.filter = `saturate(${saturacion.value}%)`;
});

const negativo = document.querySelector("#negativo");

negativo.addEventListener("change", () => {
    imagenMeme.style.filter = `invert(${negativo.value})`;
});
// ######### BOTON RESTAURAR FILTRO ###########
botonRestaurar.addEventListener("click", () => {
    imagenMeme.style.filter = `brightness(${brillo.value = 1})`;
    imagenMeme.style.filter = `opacity(${opacidad.value = 1})`;
    imagenMeme.style.filter = `contrast(${contraste.value = 1})`;
    imagenMeme.style.filter = `blur(${desenfoque.value = 0}px)`;
    imagenMeme.style.filter = `grayscale(${escalaDeGrises.value = 0})`;
    imagenMeme.style.filter = `sepia(${sepia.value = 0})`;
    imagenMeme.style.filter = `hue-rotate(${hue.value = 0}deg)`;
    imagenMeme.style.filter = `saturate(${saturacion.value = 1})`;
    imagenMeme.style.filter = `invert(${negativo.value = 0})`;
});

// ------------------- APARTADO TEXTO ----------------------

// ######## PERSONALIZAR TOP Y BOTTOM TEXT ############
const contenedorTextoSuperior = document.querySelector("#texto-arriba");

textoSuperior.addEventListener("input", () => {
    contenedorTextoSuperior.innerHTML = `${textoSuperior.value}`;
})

const contenedorTextoInferior = document.querySelector("#texto-abajo");

textoInferior.addEventListener("input", () => {
    contenedorTextoInferior.innerHTML = `${textoInferior.value}`;
});


// ####### SIN TOP/BOTTOM TEXT ###############
const sinTextoSuperior = document.querySelector("#sin-texto-sup");
const sinTextoInferior = document.querySelector("#sin-texto-inf");

const ocultarTextos = () => {
    if(sinTextoSuperior.checked && sinTextoInferior.checked) {
        contenedorTextoSuperior.style.display = 'none';
        contenedorTextoInferior.style.display = 'none';
        imagenMeme.style.height = '100%';
    } else if(sinTextoSuperior.checked && !sinTextoInferior.checked) {
        contenedorTextoSuperior.style.display = 'none';
        contenedorTextoInferior.style.display = 'block';
        imagenMeme.style.height = '80%';
    } else if (sinTextoInferior.checked && !sinTextoSuperior.checked) {
        contenedorTextoInferior.style.display = 'none';
        contenedorTextoSuperior.style.display = 'block';
        imagenMeme.style.height = '80%';
    } else {
        contenedorTextoInferior.style.display = 'block';
        contenedorTextoSuperior.style.display = 'block';
        imagenMeme.style.height = '60%';
    }
}

sinTextoSuperior.addEventListener('click', () => ocultarTextos());
sinTextoInferior.addEventListener('click', () => ocultarTextos());

// ########## CAMBIO DE FUENTE #############
fuenteOpciones.addEventListener("change", () => {
    contenedorTextoSuperior.style.fontFamily = `${fuenteOpciones.value}`;
});

fuenteOpciones.addEventListener("change", () => {
    contenedorTextoInferior.style.fontFamily = `${fuenteOpciones.value}`;
});

// ############ CAMBIO DEL TAMAÑO DE LA FUENTE #################
const tamanioFuente = document.querySelector("#tamanio-fuente");

tamanioFuente.addEventListener("change", () => {
    contenedorTextoSuperior.style.fontSize = `${tamanioFuente.value}px`;
});

tamanioFuente.addEventListener("change", () => {
    contenedorTextoInferior.style.fontSize = `${tamanioFuente.value}px`;
});

// ########### ALINEACION DE LOS TEXTOS ########## 

botonIzquierda.addEventListener("click", () => {
    contenedorTextoSuperior.style.textAlign = "left";
    contenedorTextoInferior.style.textAlign = "left";
});

botonCentro.addEventListener("click", () => {
    contenedorTextoSuperior.style.textAlign = "center";
    contenedorTextoInferior.style.textAlign = "center";
});

botonDerecha.addEventListener("click", () => {
    contenedorTextoSuperior.style.textAlign = "right";
    contenedorTextoInferior.style.textAlign = "right";
});

// ########## COLOR DE FONDO DEL TEXTO #############

const fondoTexto = document.getElementById("fondo-texto");
const hexadecimalFondoTexto = document.getElementById("hexadecimal-fondo-texto");

fondoTexto.addEventListener("input", () => {
    contenedorTextoSuperior.style.backgroundColor = `${fondoTexto.value}`;
    contenedorTextoInferior.style.backgroundColor = `${fondoTexto.value}`;
    hexadecimalFondoTexto.innerHTML = `${fondoTexto.value}`.toUpperCase();
})

const colorTexto = document.getElementById("color-texto");
const hexadecimalColorTexto = document.getElementById("hexadecimal-color-texto");

colorTexto.addEventListener("input", () => {
    contenedorTextoSuperior.style.color = `${colorTexto.value}`;
    contenedorTextoInferior.style.color = `${colorTexto.value}`;
    hexadecimalColorTexto.innerHTML = `${colorTexto.value}`.toUpperCase();
})
// ########### FONDO TRANSPARENTE ##################
const fondoTransparente = document.getElementById("fondo-transparente");

const sinFondo = () => {
    if (fondoTransparente.checked) {
        contenedorTextoSuperior.style.backgroundColor = "transparent";
        meme.style.position = "relative";
        contenedorTextoSuperior.style.position = "absolute";
        contenedorTextoSuperior.style.top = "0px";
        meme.style.alignItems = "center";
        contenedorTextoInferior.style.backgroundColor = "transparent";
        contenedorTextoInferior.style.position = "absolute";
        contenedorTextoInferior.style.bottom = "0px";
        imagenMeme.style.height = "100%";
    } else if (!fondoTransparente.checked) {
        meme.style.alignItems = "stretch";
        contenedorTextoSuperior.style.position = "static";
        contenedorTextoInferior.style.position = "static";
        contenedorTextoSuperior.style.backgroundColor = `${fondoTexto.value}`;
        contenedorTextoInferior.style.backgroundColor = `${fondoTexto.value}`;
    }
}

fondoTransparente.addEventListener("click", () => sinFondo());

// ########### CONTORNO DEL TEXTO ###############

botonSinCortorno.addEventListener("click", () => {
    contenedorTextoSuperior.style.textShadow = "none";
    contenedorTextoInferior.style.textShadow = "none";
});

botonContornoClaro.addEventListener("click", () => {
    contenedorTextoSuperior.style.textShadow = "2px 2px white, -2px 2px white, 2px -2px white, -2px -2px white";
    contenedorTextoInferior.style.textShadow = "2px 2px white, -2px 2px white, 2px -2px white, -2px -2px white";
});

botonContornoOscuro.addEventListener("click", () => {
    contenedorTextoSuperior.style.textShadow = "2px 2px black, -2px 2px black, 2px -2px black, -2px -2px black";
    contenedorTextoInferior.style.textShadow = "2px 2px black, -2px 2px black, 2px -2px black, -2px -2px black";
});

// ######### ESPACIADO DEL TEXTO ###########
espaciado.addEventListener ("change", () => {
    contenedorTextoSuperior.style.padding = `${espaciado.value}px 20px`;
    contenedorTextoInferior.style.padding = `${espaciado.value}px 20px`;
    // imagenMeme.style.height = "100%";
})

// ########### INTERLINEADO DEL TEXTO #################
interlineado.addEventListener("change", () => {
    contenedorTextoSuperior.style.lineHeight = `${interlineado.value}`;
    contenedorTextoInferior.style.lineHeight = `${interlineado.value}`;
})

// ########### BOTON DESCARGAR ################
const meme = document.getElementById("meme");
const botonDescargar = document.getElementById("boton-descargar");

const descargarMeme = () => {
    domtoimage.toBlob(meme).then(function (blob) {
        window.saveAs(blob, "mi-memardo.png");
    });
}

botonDescargar.addEventListener("click", () => descargarMeme());