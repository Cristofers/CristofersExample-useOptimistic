"use client";
import { getRickAndMortyData } from "./rick-and-morty-api";
import { Character } from "./rick-and-morty-api";
import { useState, useOptimistic } from "react";
import RickMortyCard from "./rick-and-morty-card";

export default function Home() {
  const [rickAndMortyData, setRickAndMortyData] = useState<Character[]>([]);
  const [actualPage, setActualPage] = useState<number>(1);
  const [optimisticState, addOptimistic] = useOptimistic(
    rickAndMortyData,
    (currentState, optimisticValue: Character) => {
      return [...currentState, optimisticValue];
    }
  );

  const onClickHandler = async () => {
    addOptimistic({
      url: "#",
      origin: { url: "#" },
      location: { url: "#" },
    } as Character);
    const data = await getRickAndMortyData(actualPage);
    setRickAndMortyData([...rickAndMortyData, ...data]);
    setActualPage(actualPage + 1);
  };

  return (
    <main className="w-screen box-border">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2">
        {optimisticState.map((character, idx) => (
          <RickMortyCard character={character} key={idx} />
        ))}
      </div>
      <button
        className="block m-4 box-border p-4 border rounded-sm shadow-sm"
        onClick={onClickHandler}
      >
        Get More Characters
      </button>
    </main>
  );
}
