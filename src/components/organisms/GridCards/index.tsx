"use client";

import { useRouter } from "next/navigation";
import usePokemonFetch from "@/hooks/usePokemonFetch";
import type { Pokemon } from "@/hooks/usePokemonFetch";
import Card from "@/components/atoms/Card";

interface GridCardsProps {
  pokemonList?: Pokemon[];
}

const GridCards = ({ pokemonList: initialPokemonList }: GridCardsProps) => {
  const router = useRouter();
  const {
    pokemonList: fetchedPokemonList,
    loading,
    error,
    nextPage,
    prevPage,
    offset,
  } = usePokemonFetch();

  const pokemonList = initialPokemonList || fetchedPokemonList;
  const showPagination = !initialPokemonList;

  if (loading && !initialPokemonList) {
    return <div>Loading...</div>;
  }

  if (error && !initialPokemonList) {
    return <div>Error: {error.message}</div>;
  }

  const handleSelectedCard = (id: string) => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {pokemonList.map(({ id, name, imageUrl }) => (
          <Card
            key={id}
            name={name}
            image={imageUrl}
            handleSelectCard={() => handleSelectedCard(id)}
          />
        ))}
      </div>
      {showPagination && (
        <div className="mt-4 flex gap-2 justify-center">
          <button
            onClick={prevPage}
            disabled={offset === 0}
            className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
              offset === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
            }`}
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            className="px-4 py-2 bg-blue-500 text-white rounded text-sm font-medium hover:bg-blue-600 cursor-pointer transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default GridCards;
