"use client";

import { useState, useEffect } from "react";

export interface Pokemon {
  id: string;
  name: string;
  url: string;
  imageUrl: string;
}

interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
}

const usePokemonFetch = (initialLimit = 10) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(initialLimit);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch Pokémon list");
        }
        const data: PokemonListResponse = await response.json();

        const pokemonWithImages = data.results.map((pokemon) => {
          const id = pokemon.url.split("/").filter(Boolean).pop() || "";
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
          return { ...pokemon, id, imageUrl };
        });

        setPokemonList(pokemonWithImages);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [offset, limit]);

  const nextPage = () => {
    setOffset((prevOffset) => prevOffset + limit);
  };

  const prevPage = () => {
    setOffset((prevOffset) => Math.max(0, prevOffset - limit));
  };

  return {
    pokemonList,
    loading,
    error,
    nextPage,
    prevPage,
    offset,
    limit,
    setLimit,
  };
};

export default usePokemonFetch;
