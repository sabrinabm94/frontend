const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

// Endpoint para buscar Pokémon por ID ou nome
app.get("/pokemon/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id.toLowerCase()}`);
    if (!response.ok) throw new Error("Não encontrado");
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(404).json({ error: "Pokémon não encontrado" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
