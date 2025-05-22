const promesa = new Promise((resolve, reject) => {
    setTimeout(() => reject("ERROR"), 2000);
});

promesa
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Codigo que se ejecutara siempre al finalizar la promesa");
    });
