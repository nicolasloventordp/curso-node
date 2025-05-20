function tareaPesadaAsync(){
    return new Promise(resolve => {
        setTimeout(()=> {
            resolve("Termino tarea pesada Async")
        },4000);
        //no se bloquea, lo resuelve en segundo plano
    })
}

async function main(){
    console.log("inicio programa");
    const result = await tareaPesadaAsync();
    console.log(result);
    console.log("Fin del programa");
}

main();