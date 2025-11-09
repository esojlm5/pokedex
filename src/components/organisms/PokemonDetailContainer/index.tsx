"use client";

import Card from "@/components/atoms/Card";
import { useCaughtPokemonStore } from "@/store/useCaughtPokemonStore";
import { PokemonDetails } from "@/app/pokemon/[id]/page";
import { Pokemon } from "@/store/useCaughtPokemonStore";

const PokemonDetailContainer = ({ pokemon }: { pokemon: PokemonDetails }) => {
  const { addPokemon } = useCaughtPokemonStore();

  const handleCatch = () => {
    const pokemonToCatch: Pokemon = {
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
