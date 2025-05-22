/*fetch('https://fakestoreapi.com/products')
    //response es un objeto, al transformarlo en json devuelve otra promesa.
    .then(response => response.json())
    .then(data => console.log(data));*/

async function getProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getProducts();