function bloqueante() {
    const inicio = Date.now();//hora actual en milisegundos 1000 = 1seg
    while(Date.now() - inicio < 5000){
        //espera activa de 5seg
    }
    console.log("tarea bloqueante terminada");
}

console.log("Inicio del programa");
bloqueante();
console.log("Fin del programa");