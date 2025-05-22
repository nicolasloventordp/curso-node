function promesa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("OK"), 2000);
    })
};
//funcion asincrónica no bloqueante
async function main() {
    //try catch para manejar los errores que puede generar la promesa
    try {
        //Las promesas hace que se vuelvan sincronicas al momento de codearlas
        const response = await promesa();
        console.log(response);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Siempre se ejecuta");
    }
}

main();