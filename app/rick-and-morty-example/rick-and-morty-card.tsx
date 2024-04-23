import React from "react";
import { Character } from "./rick-and-morty-api";
import Image from "next/image";

interface RickMortyCardProps {
  character: Character;
}

const RickMortyCard = ({ character }: RickMortyCardProps) => {
  return (
    <div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden">
      <Image
        src={character.image}
        alt={character.name}
        className="w-full h-48 object-cover"
        width={1000}
        height={1000}
      />

      <div className="p-6 flex flex-col">
        <h2 className="text-xl font-semibold text-gray-800">
          {character.name}
        </h2>

        <div className="mt-4">
          <p className="text-gray-600">ID: {character.id}</p>
          <p className="text-gray-600">Status: {character.status}</p>
          <p className="text-gray-600">Species: {character.species}</p>
          <p className="text-gray-600">Gender: {character.gender}</p>

          <div className="mt-2">
            <p className="text-gray-600">
              Origin:{" "}
              <a
                href={character.origin.url}
                className="text-blue-500 hover:underline"
              >
                {character.origin.name}
              </a>
            </p>
            <p className="text-gray-600">
              Last Known Location:{" "}
              <a
                href={character.location.url}
                className="text-blue-500 hover:underline"
              >
                {character.location.name}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RickMortyCard;
