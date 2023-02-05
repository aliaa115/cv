import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher: string) => {
  try {
    if (!["DC Comics", "Marvel Comics"].includes(publisher)) {
      throw new Error(`${publisher} no es valido`);
    }

    return heroes.filter((heroe) => heroe.publisher === publisher);
  } catch (error) {
    console.error(error);
  }
};
