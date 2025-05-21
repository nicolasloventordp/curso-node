const objeto = {
    nombre: "Nicolas",
    saludar: function(){
        // con arrow functions no se puede usar el this
        console.log(`${this.nombre}`);
    }
}

objeto.saludar();