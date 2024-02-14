const pokemons = window.pokemons;
// Get the container element where you want to append the divs
const container = document.getElementById("container");

// Loop over the pokemons array
for (let pokemon of pokemons) {
  // Create a new div element
  let div = document.createElement("div");
  // Set the class attribute
  div.setAttribute("class", "max-w-sm rounded overflow-hidden shadow-lg text-center bg-white font-sans");
  // Set the innerHTML using template literals
  div.innerHTML = `
    <img class="w-full" src="${pokemon.img}" alt="Pokémon">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">${pokemon.name}</div>
      <p class="text-gray-700 text-base">
        ${pokemon.type.join(", ")}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${pokemon.weight}</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${pokemon.avg_spawns}</span>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span class="inline-block text-red-500 text-3xl">♥️</span>
    </div>
  `;
  // Append the div to the container
  container.appendChild(div);
}
