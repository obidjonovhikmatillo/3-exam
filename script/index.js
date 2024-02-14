
const container = document.querySelector(".js-container");

container.setAttribute('class', 'flex gap-[30px] items-center justify-center  grid-rows-4 container mb-24 mx-auto flex-wrap  mt-[100px]')



//  Pokemons array
for (let pokemon of pokemons) {
  let div = document.createElement("div");
  div.setAttribute("class", " ");

  div.innerHTML = `  
  <div class="w-[307px] h-[423px] rounded-2xl border-2 bg-white border-black  ">
    <div class="border-b-2 border-black w-full flex justify-center pt-[30px] pb-[68px]">
      <img src="${pokemon.img}" alt="${pokemon.name}" /> 
    </div>
    <div class="flex justify-between pr-[30px] pl-[30px]">
      <div>
        <h3 class="text-2xl font-bold pt-5 ">${pokemon.name}</h3>
        <p class="font-medium text-xl pb-[25px]">${pokemon.type.join(", ")}</p>
      </div>
      <i class="fa-solid fa-heart ${localStorage.getItem(`heartClicked-${pokemon.id}`) === 'true' ? 'text-red-500' : 'text-gray-300'} pt-[26px] " data-id="${pokemon.id}"></i>
    </div>
    <div class="font-bold text-2xl flex gap-[30px] pl-[30px]">
      <p>${pokemon.weight} </p>
      <p>${pokemon.avg_spawns} age </p>
    </div>
  </div>
  `;
  
  container.append(div);
}




// Add click event listener
container.addEventListener('click', function(event) {
  const clickedElement = event.target;
  if (clickedElement.classList.contains('fa-heart')) {
    const pokemonId = clickedElement.dataset.id;
    const isHeartClicked = localStorage.getItem(`heartClicked-${pokemonId}`) === 'true';

    if (isHeartClicked) {
      clickedElement.classList.remove('text-red-500');
      localStorage.setItem(`heartClicked-${pokemonId}`, 'false');
    } else {
      clickedElement.classList.add('text-red-500');
      localStorage.setItem(`heartClicked-${pokemonId}`, 'true');
    }
  }
});

