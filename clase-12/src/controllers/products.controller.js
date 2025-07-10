import * as service from "../services/products.service.js";

export const getAllProducts = (req, res) => {
    res.json(service.getAllProducts);
};