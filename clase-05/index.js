/** Consumiendo modulos type commonJS - Forma tradicional **/
//const modulo = require("./modulo");
//console.log(modulo.saludarDesdeModulo("Nico"));
// - con destructuring
//const { saludarDesdeModulo } = require("./modulo");
//console.log(saludarDesdeModulo("Nico"));

// - utilizando type ES Modules - Forma mas moderna, menos errores. (Ej: react)
//Debemos camiar en package la manera de crear y llamar a los modulos. Type: module
/*import { say } from 'cowsay';
import { saludar} from './modulo.js';

console.log(say({ text: 'grazing in the browser' }));
console.log(saludar('Nico'));*/

//Rutas con commonJS
//const path = require("path");
//console.log(__dirname); //ruta exacta del archivo

//Rutas con module
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import fs from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(import.meta.url);
console.log(__filename);
console.log(__dirname);

const productos = fs.readFileSync('./data/productos.json','utf-8');
console.log("Productos con ruta relativa: ",productos);

//forma con ruta absoluta 

const pathProducts = path.join(__dirname,"data","productos.json");
const productosConPath = fs.readFileSync(pathProducts,'utf-8');
console.log("Productos con path: ", productosConPath); 