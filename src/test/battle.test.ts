import Pokemon from '../main/pokemon';
import { fight, getRoundOrder } from '../main/battle';
import Attack from '../main/attack';

describe('Test battle.ts', () => {
  let attacks = Array<Attack>();
  attacks.push(new Attack('charge', 50, 'normal', 'physical', 90));
  let pika: Pokemon = new Pokemon('pikachu', 1, 20, 30, 10, 10, attacks);
  let draco: Pokemon = new Pokemon('dracofeu', 1, 40, 20, 10, 10, attacks);
  test('should return first pokemon to play', () => {
    expect(getRoundOrder(pika, draco)).toEqual([draco, pika]);
  });
  test('should reduce defender hp', () => {
    expect(fight(pika, draco, pika.attacks[0])).toBe(16);
  });
  test('new hp should be 0 when negative', () => {
    draco.hp = 2;
    expect(fight(pika, draco, pika.attacks[0])).toBe(0);
  });
});
