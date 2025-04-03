const imagenes = document.querySelectorAll('.img-galery')
const imageneslight = document.querySelector('.agregar-imagen')
const contenedorLight =document.querySelector('.imagen-ligth')
const hamburguer1 = document.querySelector('.hamburguer');

imagenes.forEach(imagenes =>{
    imagenes.addEventListener('click', ()=>{
        aparecerImagen(imagenes.getAttribute('src'))
        
    })
})


contenedorLight.addEventListener('click',(e)=>{
    if(e.target !== imageneslight){
        contenedorLight.classList.toggle('show')
        imageneslight.classList.toggle('showImage')
        hamburguer1.style.opacity = '1'
    }
})


const aparecerImagen = (imagen)=>{
    imageneslight.src = imagen;
    contenedorLight.classList.toggle('show')
    imageneslight.classList.toggle('showImage')
    hamburguer1.style.opacity = '0'
}