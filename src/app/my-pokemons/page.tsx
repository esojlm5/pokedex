"use client";
import { useCaughtPokemonStore } from "@/store/useCaughtPokemonStore";
import Card from "@/components/atoms/Card";

const MyPokemons = () => {
  const { caughtPokemon } = useCaughtPokemonStore();
  console.log("caught pokemon", caughtPokemon);
  return (
    <div className="container mx-auto p-4">
      <div>
        {caughtPokemon.length === 0 && (
          <p className="text-center text-lg">
            You have not caught any Pokémon yet.
          </p>
        )}
      </div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {caughtPokemon.map(({ id, name, imageUrl }) => (
            <Card key={id} name={name} image={imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPokemons;
