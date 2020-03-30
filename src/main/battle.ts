import Pokemon from "./pokemon";
import Attack from "./attack";

const randInt = (limit: number):number => {
   return Math.floor(Math.random()* Math.floor(limit));
};

export const getRoundOrder = (pokemon1: Pokemon, pokemon2: Pokemon):Pokemon[] => {
  if(pokemon1.speed === pokemon2.speed){
    return randInt(2) === 0 ? [pokemon1,pokemon2] : [pokemon2,pokemon1];
  }
  return pokemon1.speed > pokemon2.speed ? [pokemon1,pokemon2] : [pokemon2,pokemon1];
};

export const fight = (attacker: Pokemon, defender: Pokemon, attack: Attack) =>{
  const damage = Math.floor(Math.floor(Math.floor(2 * attacker.level / 5 + 2) * attacker.attack * attack.power / defender.defense) / 50) + 2;
  console.log(`${attacker.name} inflict ${damage} to ${defender.name}`);
  const newHp = defender.hp - damage;
  return newHp <= 0 ? 0 : newHp;
};