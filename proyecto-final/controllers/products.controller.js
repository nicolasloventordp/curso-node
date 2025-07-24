import * as Model from "../models/products.model.js";

export const getAllProducts = async (req, res) => {
    const products = await Model.getAllProducts();
    res.json(products);
}

export const getProductById = async (req, res) => {
    const { id } = req.params;
    const product = await Model.getProductById(id);
    if(product){
 res.json(product);
    }else{
        res.status(404).json({ message: "Producto no encontrado."})
    }
   
}