import type { gameTypes, gameGenre, coverTitlePosition } from "./enums";

export interface game {
  imageURL: string | "";
  coverURL: string;
  imagePos: coverTitlePosition;
  title: string;
  description: string;
  fullDescription: string;
  platforms: string;
  type: gameTypes;
  genre: gameGenre;
  id: string;
}
