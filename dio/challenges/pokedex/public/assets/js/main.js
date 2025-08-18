let currentId = 1; // ID atual do Pokémon exibido

// Função para buscar e atualizar o card
async function fetchPokemon(idOrName) {
  try {
    const res = await fetch(`/pokemon/${idOrName}`);
    if (!res.ok) throw new Error("Pokémon não encontrado");
    const data = await res.json();

    // Atualiza informações no card
    document.getElementById("pokemonName").textContent =
      data.name.charAt(0).toUpperCase() + data.name.slice(1);
    document.getElementById("pokemonId").textContent = `#${data.id}`;
    document.getElementById("pokemonSprite").src = data.sprites.front_default;

    // Tipos
    const types = data.types
      .map((t) => `<li class="type type--${t.type.name}">${t.type.name}</li>`)
      .join("");
    document.getElementById("pokemonTypes").innerHTML = types;

    // Medidas
    document.getElementById("pokemonHeight").textContent = `${data.height / 10} m`;
    document.getElementById("pokemonWeight").textContent = `${data.weight / 10} kg`;
    document.getElementById("pokemonAbilities").textContent = data.abilities
      .map((ab) => ab.ability.name)
      .join(", ");

    // Stats
    const statsRow = data.stats
      .map((s) => `<td>${s.base_stat}</td>`)
      .join("");
    document.getElementById("pokemonStats").innerHTML = `<tr>${statsRow}</tr>`;

    // Atualiza ID atual
    currentId = data.id;

  } catch (error) {
    alert("Erro: Pokémon não encontrado!");
  }
}

// Evento do formulário de busca
document.getElementById("searchForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("searchInput").value.toLowerCase();
  if (input) fetchPokemon(input);
});

// Botões anterior/próximo
document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentId > 1) fetchPokemon(currentId - 1);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  fetchPokemon(currentId + 1);
});

// Carregar Pokémon inicial
fetchPokemon(currentId);
