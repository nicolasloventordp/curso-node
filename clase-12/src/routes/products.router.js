import { Router } from "express";
import { getAllProducts, getProductById } from "../controllers/products.controller.js";

const router = Router();

router.get("/products/search", (req, res) => {
    const {name} = req.query;
    res.json(name);
});

router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);

export default router;
