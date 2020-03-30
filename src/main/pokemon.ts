import Attack from "./attack";

class Pokemon {
    constructor(public readonly name: string, public level: number, public speed: number, public hp: number, public attack: number, public defense: number, public attacks:Array<Attack>) {
    }
}

export default Pokemon;