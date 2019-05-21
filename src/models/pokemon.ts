import {Stats} from './stats'

export class Pokemon {
    
    Name  : string
    Stats : Stats
    Level : number
    Life        : number = 1000
    InitialLife : number = 1000

    constructor(_name  : string, 
                _stats : Stats,
                _level : number ) {

        this.Name  = _name
        this.Stats = _stats
        this.Level = _level
    }

    isFirst(opponent : Pokemon) : boolean {

        if(opponent.Level > this.Level) {
            return true
        }
        return false
    }

    attack(opponent : Pokemon) : void {

        let fight = this.Stats.Attack - opponent.Stats.Defense
        opponent.Life -= (fight > 0) ? this.Stats.HP : 0
    }

    specialAttack(opponent : Pokemon) : void {

        let fight = this.Stats.SpAttack - opponent.Stats.SpDefense
        opponent.Life -= (fight > 0) ? this.Stats.HP : 0
    }
}