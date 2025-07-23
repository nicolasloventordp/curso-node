import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.json("Hola Mundo");
})
const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));