const precios = [10,20,30,40,50,60,70,80,90,100];

function calcularIva(precios){
    precios.map((precio) => console.log(precio * 1.21));
}

calcularIva(precios);