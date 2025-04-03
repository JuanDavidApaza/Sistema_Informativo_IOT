function redireccion(){
    location.href="https://es.wikipedia.org/wiki/Agricultura#:~:text=La%20agricultura%20%28del%20lat%C3%ADn%20agri%20%E2%80%98campo%E2%80%99%20y%20cult%C5%ABra,de%20la%20tierra%20para%20la%20producci%C3%B3n%20de%20alimentos.";
}

const menu = document.querySelector('.menu')
const cabesera = document.querySelector('.menu-navegacion')
console.log(menu)
console.log(cabesera)

menu.addEventListener('click',()=>{
    cabesera.classList.toggle("spread")
    

})
window.addEventListener('click',e=>{
    if(cabesera.classList.contains('spread') && e.target !=cabesera && e.target != menu){
        cabesera.classList.toggle("spread")

    }
})
