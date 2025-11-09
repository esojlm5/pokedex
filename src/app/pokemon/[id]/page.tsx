import PokemonDetailContainer from "@/components/organisms/PokemonDetailContainer";

interface PokemonDetails {
  id: number;
  name: string;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  types: {
    type: {
      name: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
    };
  }[];
  height: number;
  weight: number;
}

async function getPokemonDetails(id: string): Promise<PokemonDetails> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch Pokémon details");
  }
  return response.json();
}

const PokemonDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const pokemon = await getPokemonDetails(id);

  return (
    <div className="container mx-auto px-4 py-8 flex justify-center">
      <div className="max-w-2xl w-full">
        <PokemonDetailContainer pokemon={pokemon} />
      </div>
    </div>
  );
};

export default PokemonDetailPage;
