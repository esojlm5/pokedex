"use client";

import Card from "@/components/atoms/Card";
import { useCaughtPokemonStore } from "@/store/useCaughtPokemonStore";

const PokemonDetailContainer = ({ pokemon }) => {
  const { addPokemon } = useCaughtPokemonStore();

  const handleCatch = () => {
    const pokemonToCatch = {
      id: pokemon.id,
      name: pokemon.name,
      imageUrl: pokemon.sprites.other.dream_world.front_default,
    };
    addPokemon(pokemonToCatch);
    alert(`${pokemon.name} has been caught!`);
  };

  const fullDetails = {
    height: pokemon.height,
    weight: pokemon.weight,
    types: pokemon.types,
    abilities: pokemon.abilities,
  };

  return (
    <Card
      image={pokemon.sprites.other.dream_world.front_default}
      name={pokemon.name}
      fullDetails={fullDetails}
      handleCatch={handleCatch}
    />
  );
};

export default PokemonDetailContainer;
