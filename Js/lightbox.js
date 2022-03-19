const imagenes = document.querySelectorAll (".imagen-proyectos")
const imagenesLigth =  document.querySelector (".agregar-imagen")
const contenedorLigth = document.querySelector (".imagen-light")
const Menu1 = document.querySelector(".Menu");
imagenes.forEach(imagen => {
    imagen.addEventListener("click", ()=>{
      aparecerImagen(imagen.getAttribute("src"))
    })

});
contenedorLigth.addEventListener("click", (e)=>{
   if(e.target !== imagenesLigth){
    contenedorLigth.classList.toggle ("show")
    imagenesLigth.classList.toggle ("showImage")
    Menu1.style.opacity = "1"
   }
})  
const aparecerImagen = (imagen)=>{
    imagenesLigth.src = imagen;
    contenedorLigth.classList.toggle ("show")
    imagenesLigth.classList.toggle ("showImage")
    Menu1.style.opacity = "0"
}