import {Pokemon} from '../src/models/pokemon'
import {Stats}   from '../src/models/stats'

let stats1 : Stats = new Stats(100, 100, 80, 200, 150, 160)
let stats2 : Stats = new Stats(120, 80,  90, 100, 180, 120)

let pokemon1 : Pokemon = new Pokemon('Jean Pierre',   stats1, 3)
let pokemon2 : Pokemon = new Pokemon('Louise Michel', stats2, 2)

describe('first', () => {
    it('pokemon2 with lower level should be the first', () => {

        expect(pokemon1.isFirst(pokemon2)).toBe(false)
    })
})

describe('attack', () => {
    it('pokemon2 should loose fight', () => {

        pokemon2.attack(pokemon1)
        expect(pokemon1.Life).toBe(pokemon1.InitialLife)
    })
})

describe('attack', () => {
    it('pokemon1 should win fight', () => {

        pokemon1.attack(pokemon2)
        expect(pokemon2.Life).toBe(pokemon2.InitialLife - pokemon1.Stats.HP)
    })
})