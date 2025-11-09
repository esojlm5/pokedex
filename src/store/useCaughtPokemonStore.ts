import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface Pokemon {
  id: string;
  name: string;
  imageUrl: string;
}

interface CaughtPokemonState {
  caughtPokemon: Pokemon[];
  addPokemon: (pokemon: Pokemon) => void;
}

export const useCaughtPokemonStore = create<CaughtPokemonState>()(
  persist(
    (set, get) => ({
      caughtPokemon: [],
      addPokemon: (pokemon) => {
        const alreadyCaught = get().caughtPokemon.some(
          (p) => p.id === pokemon.id,
        );
        if (!alreadyCaught) {
          set((state) => ({
            caughtPokemon: [...state.caughtPokemon, pokemon],
          }));
        }
      },
    }),
    {
      name: "caught-pokemon-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
