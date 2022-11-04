const totalNumberOfPokemon = 895;

// Generates a random Pokedex number for each of the four buttons to query the API with.
let randomNumber = Math.floor(Math.random() * totalNumberOfPokemon) + 1;
let randomNumber2 = Math.floor(Math.random() * totalNumberOfPokemon) + 1;
let randomNumber3 = Math.floor(Math.random() * totalNumberOfPokemon) + 1;
let randomNumber4 = Math.floor(Math.random() * totalNumberOfPokemon) + 1;

// Fetching the first Pokemon from the API. The first Pokemon fetched is always the correct answer.
fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let firstPokemonFromAPI = data.name;
    let correctAnswer = firstPokemonFromAPI;
    let firstPokemonFromAPIPictureURL = data.sprites.front_default;

    console.log("correctAnswer: " + correctAnswer);
    console.log("firstPokemonFromAPI: " + firstPokemonFromAPI);
    console.log("firstPokemonFromAPIPictureURL: " + firstPokemonFromAPIPictureURL);

    // Displaying the Pokemon image on the page.
    document.getElementById("pokemonOnTheScreen").src = firstPokemonFromAPIPictureURL;
    // Mapping the Pokemon name to the HTML button.
    const pokemon_button = document.getElementById("pokemon-button");
    pokemon_button.textContent = firstPokemonFromAPI;
  });

// Fetching the second Pokemon from the API.
fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber2}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let secondPokemonFromAPI = data.name;
    console.log(secondPokemonFromAPI);
    // Mapping Pokemon name to the HTML button
    const pokemon_button2 = document.getElementById("pokemon-button2");
    pokemon_button2.textContent = secondPokemonFromAPI;
  });

// Fetching the third Pokemon from the API.
fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber3}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let thirdPokemonFromAPI = data.name;
    console.log(thirdPokemonFromAPI);
    // Mapping Pokemon name to the HTML button
    const pokemon_button3 = document.getElementById("pokemon-button3");
    pokemon_button3.textContent = thirdPokemonFromAPI;
  });

// Fetching the fourth Pokemon from the API.
fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber4}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let fourthPokemonFromAPI = data.name;
    console.log(fourthPokemonFromAPI);
    // Mapping Pokemon name to the HTML button
    const pokemon_button4 = document.getElementById("pokemon-button4");
    pokemon_button4.textContent = fourthPokemonFromAPI;
  });

// Todo: Review the below code and how to merge the findDuplicates logic with the new API above. It's disconnected now.
// Array of all of our Pokemon (needs updating with new API data)
const Pokemon = [
  "Pikachu",
  "Vulpix",
  "Eevee",
  "Deez Nuts",
  "Fire Mon",
  "Poop",
  "Dratini",
  "Dragon",
  "Ekans",
];

// Picks 4 random Pokemon from the above data.
let randomPokemon = Pokemon[Math.floor(Math.random() * Pokemon.length)];
let randomPokemon2 = Pokemon[Math.floor(Math.random() * Pokemon.length)];
let randomPokemon3 = Pokemon[Math.floor(Math.random() * Pokemon.length)];
let randomPokemon4 = Pokemon[Math.floor(Math.random() * Pokemon.length)];
console.log("Pokemon have been randomized.");

// Array of Pokemon that we hope are randomized correctly (I'll give you a hint - they're not.)
const hopefullyRandomPokemon = [
  randomPokemon,
  randomPokemon2,
  randomPokemon3,
  randomPokemon4,
];

// Function that checks arrays for duplicates that I will reference later. Found this on Stack Overflow.
// Logs duplicates to the Chrome dev console.
let findDuplicates = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) != index);
duplicates = findDuplicates(hopefullyRandomPokemon);
console.log(duplicates);
console.log(duplicates.length);

// This is a loop that constantly checks for duplicate Pokemon and randomizes them until there are no more duplicates.
// I'm very sorry for this monstrosity.
while (
  randomPokemon == randomPokemon2 ||
  randomPokemon == randomPokemon3 ||
  randomPokemon == randomPokemon4 ||
  randomPokemon2 == randomPokemon3 ||
  randomPokemon2 == randomPokemon4 ||
  randomPokemon3 == randomPokemon4
) {
  randomPokemon = Pokemon[Math.floor(Math.random() * Pokemon.length)];
  randomPokemon2 = Pokemon[Math.floor(Math.random() * Pokemon.length)];
  randomPokemon3 = Pokemon[Math.floor(Math.random() * Pokemon.length)];
  randomPokemon4 = Pokemon[Math.floor(Math.random() * Pokemon.length)];

  while (randomPokemon == randomPokemon2) {
    randomPokemon = Pokemon[Math.floor(Math.random() * Pokemon.length)];
    duplicates = findDuplicates(hopefullyRandomPokemon);
    console.log("1: randomPokemon:" + randomPokemon);
    duplicates.pop();
    console.log("Duplicates length: " + duplicates.length);
  }

  while (randomPokemon == randomPokemon3) {
    randomPokemon = Pokemon[Math.floor(Math.random() * Pokemon.length)];
    duplicates = findDuplicates(hopefullyRandomPokemon);
    console.log("2: randomPokemon:" + randomPokemon);
    duplicates.pop();
    console.log("Duplicates length: " + duplicates.length);
  }

  while (randomPokemon == randomPokemon4) {
    randomPokemon = Pokemon[Math.floor(Math.random() * Pokemon.length)];
    duplicates = findDuplicates(hopefullyRandomPokemon);
    console.log("3: randomPokemon:" + randomPokemon);
    duplicates.pop();
    console.log("Duplicates length: " + duplicates.length);
  }

  while (randomPokemon2 == randomPokemon3) {
    randomPokemon2 = Pokemon[Math.floor(Math.random() * Pokemon.length)];
    duplicates = findDuplicates(hopefullyRandomPokemon);
    console.log("4: randomPokemon2:" + randomPokemon2);
    duplicates.pop();
    console.log("Duplicates length: " + duplicates.length);
  }

  while (randomPokemon2 == randomPokemon4) {
    randomPokemon2 = Pokemon[Math.floor(Math.random() * Pokemon.length)];
    duplicates = findDuplicates(hopefullyRandomPokemon);
    console.log("5: randomPokemon2:" + randomPokemon2);
    duplicates.pop();
    console.log("Duplicates length: " + duplicates.length);
  }

  while (randomPokemon3 == randomPokemon4) {
    randomPokemon3 = Pokemon[Math.floor(Math.random() * Pokemon.length)];
    duplicates = findDuplicates(hopefullyRandomPokemon);
    console.log("6: randomPokemon3:" + randomPokemon3);
    duplicates.pop();
    console.log("Duplicates length: " + duplicates.length);
  }
}

// Finally, now that the Pokemon are randomized, this prints the in the console.
// We will use these variables in our button text.
console.log("Now the buttons text:");
console.log(randomPokemon);
console.log(randomPokemon2);
console.log(randomPokemon3);
console.log(randomPokemon4);

// To do - add logic that checks to see if answer is correct or not. Example:
// pokemon_button.addEventListener('click', function handleClick() {
//     pokemon_button.textContent = 'Answer correct';
// });
