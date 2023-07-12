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