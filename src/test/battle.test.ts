import Pokemon from "../main/pokemon";
import {firstPokemon} from "../main/battle";

describe('Test battle.ts', () => {
    test('should return first pokemon to play', () => {
        const pika: Pokemon = new Pokemon("pikachu", 10);
        const draco: Pokemon = new Pokemon("dracofeu", 5);
        expect(firstPokemon(pika, draco)).toBe(pika);
    })
});