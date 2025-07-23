import * as service from "../services/products.service.js";

export const getAllProducts = (req, res) => {
    res.json(service.getAllProducts());
};

export const getProductById = (req, res) => {
    const { id } = req.params;

    const product = service.getProductById(id);
    //return res.json(service.getProductById(id));
    if (!product.length) {
        res.status(404).json({ error: "No existe el producto" });
    }

    res.json(service.getProductById(id));
};

export const getSearchProduct = (req, res) => {
    const { id } = req.params;

    const product = service.getProductById(id);

    if (!product.length) {
        res.status(404).json({ error: "No existe el producto" });
    }

    res.json(service.getProductById(id));
};