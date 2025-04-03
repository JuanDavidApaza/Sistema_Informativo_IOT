const lista = document.querySelector('.lista');
const desplegable = document.querySelector('.lista-desplegable')

console.log(desplegable)
console.log(lista)

lista.addEventListener('click', ()=>{
    desplegable.classList.toggle("spread")
})

window-addEventListener('click', e=>{
    if(desplegable.classList.contains('spread')
        && e.target != desplegable && e.target != lista){

        desplegable.classList.toggle("spread")
    
    }
})

/*
const imagenes = document.querySelectorAll('.imagen_derecha')
const imagenesLight = document.querySelectorAll('.agregar-imagen')
const contenedorLight = document.querySelectorAll('.imagen-light')

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
  })
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
}*/


