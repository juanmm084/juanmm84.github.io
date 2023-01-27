let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var Habilidades = document.getElementById("Habilidades");
    var distancia_Habilidades = window.innerHeight - Habilidades.getBoundingClientRect().top;
    if(distancia_Habilidades >= 300){
        let Habilidades = document.getElementsByClassName("progreso");
        Habilidades[0].classList.add("javascript");
        Habilidades[1].classList.add("htmlcss");
        Habilidades[2].classList.add("photoshop");
        Habilidades[3].classList.add("wordpress");
        Habilidades[4].classList.add("Phyton");
        Habilidades[5].classList.add("comunicacion");
        Habilidades[6].classList.add("trabajo");
        Habilidades[7].classList.add("creatividad");
        Habilidades[8].classList.add("dedicacion");
        Habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 