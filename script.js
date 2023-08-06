/* ----- todos ----- */



/* ----- historia ----- */
let video = document.querySelector('video')


const reproducir=()=> {
    video.play();
    let duracion= video.duration;
    let minutos= parseInt(duracion/60);
    let segundos= (((duracion/60)-minutos)*60);
    let tiempo= (minutos + ":" + segundos.toFixed(0));

    document.querySelector('.duracion').textContent=tiempo;
    repro= setInterval(()=>{
        let duracionTrans= video.currentTime;
        let minutosTrans= parseInt(duracionTrans/60);
        let segundosTrans= (((duracionTrans/60)-minutosTrans)*60);
        let tiempoTrans= (minutosTrans + ":" + segundosTrans.toFixed(0));
        document.querySelector('.tiempo').textContent=tiempoTrans;
    })
}

const pausar=()=> {
    video.pause();
    clearInterval(repro)
    
}

/* ----- juguemos ----- */

let imagen1=document.querySelector(".imgRompe1");
let imagen2=document.querySelector(".imgRompe2");
let imagen3=document.querySelector(".imgRompe3");
let contenedor1=document.querySelector(".contenedorImg1");
let contenedor2=document.querySelector(".contenedorImg2");
let contenedor3=document.querySelector(".contenedorImg3");
let botonReinicio=document.querySelector(".reinicio")

imagen1.addEventListener('dragstart', (event)=>{
    event.dataTransfer.setData("Text", "../imagenes/Rompe3.png");
});
imagen2.addEventListener('dragstart', (event)=>{
    event.dataTransfer.setData("Text", "../imagenes/Rompe2.png");
});
imagen3.addEventListener('dragstart', (event)=>{
    event.dataTransfer.setData("Text", "../imagenes/Rompe1.png");
});

contenedor1.addEventListener('dragover', (event)=>{
    event.preventDefault();
});
contenedor2.addEventListener('dragover', (event)=>{
    event.preventDefault();
});
contenedor3.addEventListener('dragover', (event)=>{
    event.preventDefault();
});

contenedor1.addEventListener("drop", (event)=>{
    let imagenRompeG=event.dataTransfer.getData("Text");
    contenedor1.innerHTML= `<img class="dImgRompe" src= ${imagenRompeG} alt="Pieza de rompecabezas"/>`
    if(imagenRompeG === "../imagenes/Rompe3.png"){
        imagen1.classList.add("hide");
    }else{
        if(imagenRompeG === "../imagenes/Rompe2.png"){
            imagen2.classList.add("hide");
    }else{
        if(imagenRompeG === "../imagenes/Rompe1.png"){
            imagen3.classList.add("hide");
    }
    }
    }
    
    event.dataTransfer.clearData("Text");
});
contenedor2.addEventListener('drop', (event)=>{
    let imagenRompeG= event.dataTransfer.getData("Text");
    contenedor2.innerHTML= `<img class="dImgRompe" src= ${imagenRompeG} alt="Pieza de rompecabezas"/>`
    if(imagenRompeG === "../imagenes/Rompe3.png"){
        imagen1.classList.add("hide");
    }else{
        if(imagenRompeG === "../imagenes/Rompe2.png"){
            imagen2.classList.add("hide");
    }else{
        if(imagenRompeG === "../imagenes/Rompe1.png"){
            imagen3.classList.add("hide");
    }
    }
    }
    event.dataTransfer.clearData("Text");
});
contenedor3.addEventListener('drop', (event)=>{
    let imagenRompeG= event.dataTransfer.getData("Text");
    contenedor3.innerHTML= `<img class="dImgRompe" src= ${imagenRompeG} alt="Pieza de rompecabezas"/>`
    if(imagenRompeG === "../imagenes/Rompe3.png"){
        imagen1.classList.add("hide");
    }else{
        if(imagenRompeG === "../imagenes/Rompe2.png"){
            imagen2.classList.add("hide");
    }else{
        if(imagenRompeG === "../imagenes/Rompe1.png"){
            imagen3.classList.add("hide");
    }
    }
    }
    event.dataTransfer.clearData("Text");
});

botonReinicio.addEventListener('click', ()=>{
    contenedor1.innerHTML = '<p style="color: white;">Arrastre y suelte la imagen aquí</p>';
    contenedor2.innerHTML = '<p style="color: white;">Arrastre y suelte la imagen aquí</p>';
    contenedor3.innerHTML = '<p style="color: white;">Arrastre y suelte la imagen aquí</p>';
    imagen1.classList.remove("hide");
    imagen2.classList.remove("hide");
    imagen3.classList.remove("hide");
});