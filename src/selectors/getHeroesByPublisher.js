import { heroes } from "../data/heroes";

export const getHeroesByPubliser = (publisher) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if(!validPublishers.includes(publisher)){
        throw new Error(`Publiser o Comic "${publisher}" no encontrado`)
    }

    return heroes.filter( hero => hero.publisher === publisher);
}