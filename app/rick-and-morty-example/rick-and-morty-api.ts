"use server";
import axios from "axios";

export const getRickAndMortyData = async (
  page: number
): Promise<Character[]> => {
  const fetchData = await axios.get(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  return fetchData.data.results as Character[];
};

export interface Character {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type?: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}
