import process from 'node:process'
import { apiProduct } from './apiProduct.js'

function callApiProduct() {
    const args = process.argv.slice(2);
    //url de la api
    const url = 'https://fakestoreapi.com';
    //destructuring de argumentos 
    const [metodo, recurso, ...params] = args;
    //valido método
    if (!(metodo == "GET" || metodo == "POST" || metodo == "DELETE"))
        throw Error("Los métodos deben ser GET, POST o DELETE");
    //valido recurso
    if (!recurso.startsWith("products"))
        throw Error('El recurso debe ser "products"');

    switch (metodo) {
        case "GET":
            apiProduct(url, metodo, recurso);
            break;
        case "POST":
            //valido parámetros del producto
            if (params.length != 3)
                throw Error("El método POST debe tener 3 parametros y en este orden: title, price y category");
            const [title, price, category] = params;
            const product = { title: title, price: price, category: category };
            apiProduct(url, metodo, recurso, product);
            break;
        case "DELETE":
            //verifico que el recurso tenga id
            let id = recurso.split("/")[1];
            if (id == undefined || id == false || id == "")
                throw Error('El ID del producto debe ser válido');
            apiProduct(url, metodo, recurso);
            break;
    }
}

callApiProduct();

//npm run start GET products
//npm run start GET products/15
//npm run start POST products T-Shirt-Rex 300 remeras
//npm run start DELETE products/7