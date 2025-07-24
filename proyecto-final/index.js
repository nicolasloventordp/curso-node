import express from "express";
import "dotenv/config";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json("Hola Mundo");
})

import productsRouter from "./routes/products.router.js";
app.use("/api", productsRouter);

import authRouter from "./routes/auth.router.js";
app.use("/api", authRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));