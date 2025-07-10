import express from "express";
import cors from "cors";
import productsRouter from "./src/routes/products.router.js";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hola mundo")
})


//rutas modularizadas
app.use("/api",productsRouter);

app.use((req, res ,next) => {
    res.status(404).json({error: "Not Found"});
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Server listen in port http://localhost:${PORT}`));