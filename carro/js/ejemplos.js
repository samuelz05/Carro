/* var titulo = document.querySelector("h1")

titulo.addEventListener('click',escucha);

function escucha(){
    alert();
}



var titulo2 = document.querySelector(".titulo2")

titulo2.addEventListener('click',TextoEscucha)

function TextoEscucha(){
    titulo2.innerHTML = "cambio de texto";
}


var cambiarColor = document.querySelector(".cambiarColor")

cambiarColor.addEventListener('click',color)

function color(){
    cambiarColor.style.color = "red"
} */

/* var titulo = document.querySelector(".titulo")
var imagen1 = document.querySelector(".imagen1")

titulo.addEventListener('click', MuestraImagen)

function MuestraImagen(){
    imagen1.classList.remove('oculto')
} */

var contenedor = document.querySelector(".contenedor")
var llanta1 = document.querySelector(".llanta1")
var llanta2 = document.querySelector(".llanta2")
var sprite = document.querySelector(".sprite")
var luz = document.querySelector(".luz")



contenedor.addEventListener('click', contenedorMover)

function contenedorMover(){
    contenedor.classList.add('contenedorMover')
    llanta1.classList.add('llanta1Mover')
    llanta2.classList.add('llanta2Mover')
    sprite.classList.remove('oculto')
    luz.classList.remove('oculto')
    sprite.classList.add('spriteMover')
    luz.classList.add('luzMover')
}


