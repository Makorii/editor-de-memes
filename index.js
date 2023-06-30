//cambio de color del fondo de texto
const textoArriba = document.getElementById('texto-arriba');
console.log(textoArriba);
const colorFondoTexto = document.getElementById('fondo-texto-arriba');
console.log(colorFondoTexto);
let colorCambiado;

const cambiarColorFondo = (color) => {
    textoArriba.style.backgroundColor = color;
}
colorFondoTexto.addEventListener('click', () => cambiarColorFondo(colorCambiado)); 

const obtenerColor = (e) => {
    colorCambiado = e.target.value;
    console.log(colorCambiado)
}

colorFondoTexto.addEventListener('input', (evento) => obtenerColor(evento))

//cambio de color de texto
const colorTexto = document.getElementById('color-texto');
console.log(colorTexto)
const cambiarColorTexto = (color) => {
    textoArriba.style.color = color;
}
console.log(cambiarColorTexto)

colorTexto.addEventListener('click', () => cambiarColorTexto(colorCambiado)); 

colorTexto.addEventListener('input', (evento) => obtenerColor(evento))

