  class Entrenador {
    constructor(nombre, pokemonInicial) {
      this.nombre = nombre;
      this.pokemon = [pokemonInicial]; // El entrenador comienza con un Pokémon
    }
  
    capturarPokemon(nuevoPokemon) {
      this.pokemon.push(nuevoPokemon);
      console.log(`${this.nombre} ha capturado a ${nuevoPokemon.nombre}!`);
    }
  }