//https://rickandmortyapi.com/api/character
/*  
    Utiliza la API pública de Rick and Morty (docs) para obtener la lista de personajes.
    Con las herramientas then, catch y finally, procesa la respuesta y devuelve por consola 
    un array con los primeros 5 resultados de los 20 personajes recibidos.
*/

function getCharactersWithFetch() {
    fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())
        .then((data) => console.log(data.results.slice(0, 5)));
}

/*
    Realiza el mismo ejercicio anterior, pero esta vez usa una función asíncrona con async y 
    await para consumir la API.
    Asegúrate de manejar errores correctamente con un bloque try/catch.
*/
async function getCharactersWithAsync() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        console.log(data.results.slice(0, 5));
    }
    catch (error) {
        console.log(error);
    } finally {

    }
}




getCharactersWithFetch();
getCharactersWithAsync();