import Pokemon from "./pokemon";

export const firstPokemon = (pokemon1: Pokemon, pokemon2: Pokemon):Pokemon => {
  return pokemon1.speed > pokemon2.speed ? pokemon1 : pokemon2;
};