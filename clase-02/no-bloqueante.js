function noBloqueante() {
    setTimeout(() => {
        console.log("tarea no bloqueante terminada");
    },5000)
    //El event loop lo detecta y se ejecuta en segundo plano. 
    //Cuando termina le avisa al hilo principal y termina la funcion. 
}

console.log("Inicio del programa");
noBloqueante();
console.log("Fin del programa");