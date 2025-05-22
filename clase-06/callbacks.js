function mostrar(callback) {
    setTimeout(() => {
        //esta funcion irá al callback queue ya que es una funcion asincronica
        //Ej: DOM, fetch.
        callback();
    }, 2000);
}

mostrar(() => console.log("Hola"));