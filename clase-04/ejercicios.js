/*1) Crea un array con 10 objetos, donde cada objeto represente un automóvil con la siguiente información:

Marca

Modelo

Año

Color

2) Usa un método de array para recorrer la lista e imprime por consola todos los datos de los automóviles cuyo año sea mayor a 2018.

Matías añade: “Queremos que veas esto como un ejercicio para prepararte para trabajar con datos reales en el futuro”.

*/ 

const automoviles = [
    {
        marca: "peugeot",
        modelo: "207",
        anio: 2020,
        color: "rojo"
    },
    {
        marca: "fiat",
        modelo: "siena",
        anio: 2019,
        color: "negro"
    },
    {
        marca: "fiat",
        modelo: "palio",
        anio: 2010,
        color: "azul"
    },
    {
        marca: "audi",
        modelo: "c3",
        anio: 2020,
        color: "marron"
    }
];

function mostrarAnioMayorQue2018(automoviles){
    automoviles.forEach(auto => {
        if(auto.anio > 2018)
            console.log(auto);
    });
}

//mostrarAnioMayorQue2018(automoviles);

/*Crea una función que recorra el array de automóviles.

Usa destructuring dentro de la función para obtener el color de cada automóvil.

La función debe aceptar un color como parámetro y devolver por consola cuántos automóviles tienen ese color.*/

function filtrarAutoPorColor(automoviles,colorInput = false){
    automoviles.forEach(auto => {
        const { color } = auto;
        if(color == colorInput)
            console.log(auto);
    });
}

filtrarAutoPorColor(automoviles,"negro");