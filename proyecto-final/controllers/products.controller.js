import * as Model from "../models/products.model.js";

export const getAllProducts = async (req, res) => {
    const products = await Model.getAllProducts();
    res.json(products);
}

export const getProductById = async (req, res) => {
    const { id } = req.params;
    const product = await Model.getProductById(id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: "Producto no encontrado." })
    }
}

export const createProduct = async (req, res) => {
    const { name, price, category, description } = req.body;

    const newProduct = await Model.createProduct({ name, price, category, description });

    res.status(201).json(newProduct);

}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    const isDelete = await Model.deleteProduct(id);

    if (isDelete)
        res.status(201).json({ message: "El producto fue eliminado." });

    res.status(201).json({ error: "El producto no existe o se pudo borrar." });
}