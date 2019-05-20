
export class Stats {

    HP        : number 
    Attack    : number
    Defense   : number 
    SpAttack  : number 
    SpDefense : number 
    Speed     : number

    constructor( _hp        : number, 
                 _attack    : number, 
                 _defense   : number, 
                 _spattack  : number, 
                 _spdefense : number, 
                 _speed     : number ) { 

        this.HP        = _hp
        this.Attack    = _attack
        this.Defense   = _defense
        this.SpAttack  = _spattack
        this.SpDefense = _spdefense
        this.Speed     = _speed
    }
    
}