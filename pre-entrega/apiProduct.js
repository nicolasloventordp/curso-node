export const apiProduct = (url, metodo, recurso, product = null) => {
    let obj = {};
    if (metodo != "GET") {
        if (metodo == "POST")
            obj = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(product)
            }
        else
            obj = {
                method: 'DELETE',
            }
    }
    fetch(`${url}/${recurso}`, obj)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}