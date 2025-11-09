import Image from "next/image";
import { useAuthStore } from "@/store/useAuthStore";

interface FullDetails {
  height: number;
  weight: number;
  types: { type: { name: string } }[];
  abilities: { ability: { name: string } }[];
}

interface CardProps {
  image: string;
  name: string;
  handleSelectCard?: () => void;
  handleCatch?: () => void;
  fullDetails?: FullDetails;
}

const Card = ({
  image,
  name,
  handleSelectCard,
  fullDetails,
  handleCatch,
}: CardProps) => {
  const { isLoggedIn } = useAuthStore();
  return (
    <div
      className={`border p-4 rounded-lg flex flex-col transition-transform duration-300 ease-in-out ${
        handleSelectCard ? "cursor-pointer hover:scale-105 hover:shadow-xl" : ""
      }`}
      onClick={handleSelectCard}
    >
      <Image
        src={image}
        alt={name}
        width={fullDetails ? 256 : 100}
        height={fullDetails ? 256 : 100}
        className="m-auto"
      />
      <h2 className="text-lg font-bold mt-4 text-center">{name}</h2>

      {fullDetails && (
        <>
          <div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div>
                <h2 className="text-xl font-semibold mb-2">Details</h2>
                <p>
                  <strong>Height:</strong> {fullDetails.height / 10} m
                </p>
                <p>
                  <strong>Weight:</strong> {fullDetails.weight / 10} kg
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Types</h2>
                <ul>
                  {fullDetails.types.map((typeInfo) => (
                    <li key={typeInfo.type.name} className="capitalize">
                      {typeInfo.type.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Abilities</h2>
                <ul>
                  {fullDetails.abilities.map((abilityInfo) => (
                    <li key={abilityInfo.ability.name} className="capitalize">
                      {abilityInfo.ability.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {isLoggedIn && handleCatch && (
              <div className="mt-6 text-center">
                <button
                  onClick={handleCatch}
                  className="cursor-pointer px-4 py-2 rounded-lg bg-yellow-400 text-white font-semibold shadow-md hover:bg-yellow-500 active:scale-95 transition-all text-center"
                >
                  🎯 Catch Pokémon
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
