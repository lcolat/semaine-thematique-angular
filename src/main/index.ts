import Pokemon from './pokemon';
import Attack from './attack';
import { fight, getRoundOrder } from './battle';
import Timeout = NodeJS.Timeout;

let intervalId: Timeout;
const simulation = (): Promise<Pokemon> => {
  let pikachu: Pokemon = new Pokemon(
    'Pikachu',
    1,
    90,
    35,
    55,
    40,
    Array<Attack>(new Attack('eclair', 40, 'special', 'electric', 100)),
  );
  let bulbasaur: Pokemon = new Pokemon(
    'Bulbasaur',
    1,
    45,
    45,
    49,
    49,
    Array<Attack>(new Attack('charge', 40, 'physical', 'normal', 100)),
  );
  console.log('New Fight start');
  const roundOrder = getRoundOrder(pikachu, bulbasaur);
  console.log(`${roundOrder[0].name} start first`);

  return new Promise((resolve, reject) => {
    intervalId = setInterval(
      () => {
        console.log('\nNew round start');
        roundOrder[1].hp = fight(roundOrder[0], roundOrder[1], roundOrder[0].attacks[0]);
        console.log(`${roundOrder[1].name} HP: ${roundOrder[1].hp}`);
        if (roundOrder[1].hp <= 0) {
          resolve(roundOrder[0]);
          clearInterval(intervalId);
          return;
        }
        roundOrder[0].hp = fight(roundOrder[1], roundOrder[0], roundOrder[1].attacks[0]);
        console.log(`${roundOrder[0].name} HP: ${roundOrder[0].hp}`);
        if (roundOrder[0].hp <= 0) {
          resolve(roundOrder[1]);
          clearInterval(intervalId);
          return;
        }
      },
      500,
      pikachu,
      bulbasaur,
    );
  });
};

simulation()
  .then(res => console.log(`\n#### ${res.name} win the fight ####`))
  .catch(e => console.log(e));
